import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import apiSidebar from "./docs/api/sidebar"; // generated from openapi/openapi.yaml (npm run gen-api)

const sidebars: SidebarsConfig = {
  docs: [
    "intro",
    { type: "category", label: "Concepts", collapsed: false, items: ["concepts/glossary", "concepts/from-data-to-case"] },
    { type: "category", label: "Processes", collapsed: false, items: ["processes/detection-cycle", "processes/improvement-cycle", "processes/governance"] },
  ],
  guides: [
    "guides/index",
    "guides/add-a-source",
    "guides/run-an-analysis",
    "guides/handle-alerts",
    "guides/investigate-and-open-a-case",
    "guides/write-a-scenario",
    "guides/calibrate-a-scenario",
    "guides/edit-a-triage",
  ],
  api: [
    "integration/contract",
    { type: "category", label: "API reference", link: { type: "doc", id: "api/fraud-engineering-studio-api" }, items: apiSidebar },
  ],
};

export default sidebars;
