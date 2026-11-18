---
id: export-to-another-engine
title: Export to another engine
description: Export scenarios with the context they need, to run them in your own detection engine.
---

# Export to another engine

**Where:** Detection Engineering › **Scenarios** › a typology › **Export for another engine**

The export is built when you ask for it. It holds everything an engine needs to run the scenarios you choose — and
nothing else.

1. Choose the scenarios. With *in use only* set, only the calibrated ones are offered.
2. Read **What you export**:
   - **Required data** — the kinds of data the package reads, in the common data model. Map your tables to it.
   - **The context** — named after the case (*Payment context*, *Credit context*): every value computed for each case,
     that the scenarios look at. Click a value to see how it is computed and what it reads. On the right, how the
     value is kept at the moment of the payment (see [In real time](#in-real-time)).
   - **Scenarios** — the scenarios, run on that context: rules, and the questions for the AI.

   **Details** shows the same as a diagram: data → values → scenario steps. Hover a box to follow its path.
3. Tick **Also as a stream** to add the values that can be computed payment by payment, as Flink SQL.
4. Tick **Include this Studio's calibration** to put your values in the package. They are specific to your data, and
   sensitive: thresholds tell a fraudster where detection stops.
5. Click **Download package**.

## In the package

| File | What it is |
|---|---|
| `run/context/<unit>.sql` | The **context builder**: one table, one row per case, one column per value. |
| `run/scenarios/<scenario>.sql` | Each scenario, a few lines on that table: its population, its conditions. With your values, or with `{{ parameters }}` to fill. |
| `run/stream/<unit>.flink.sql` | With **Also as a stream**: the same values as a stream, payment by payment (Flink SQL), and `run/stream/udf.py` for the median. |
| `context.yaml` | Each value: what it is, how it is computed, what it reads, which scenarios use it; which scenarios can decide in real time. |
| `dependencies.yaml` | The graph: scenario → indicators → features → data. |
| The scenarios, indicators, features, AI questions, tests | The knowledge itself, in plain language and as files your team can review. |

The SQL runs as it is on DuckDB, over the common data model. Run the context builders first, then the scenarios. The
same steps give the same findings as the Studio.

:::note What is not SQL
A value computed in Python (a few, such as reading a brand name in a page) is marked where it is added. The AI
questions are a specification: your engine calls the model of your choice with them.
:::

## In real time

Every value says how it is kept when it is computed at the moment of the payment, rather than over stored history:

| Label | What it means |
|---|---|
| On the payment | Read on the payment itself. |
| Reference data | Read from the account or the customer at the payment. |
| Window | A count or a sum over a recent window of the customer's payments. |
| Since the start | Kept since the customer's first payment: first time, last value. |
| Customer's usual | The customer's usual, kept over its window: median, share. |
| Other customers | Counted over other customers: the same payee, device or contact. |
| Needs *a source* | Reads another source (calls, log-ins, cases…): as fresh as that source at the payment. |
| Series | A trend over a series of payments. |

Some values are written as their **shape** — what is counted, whose, over what, up to when. Their SQL and their stream
are both compiled from it, and checked to give the same values, case by case. What you calibrate in the Studio is what
runs in your engine.

