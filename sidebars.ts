import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import apiSidebar from "./docs/api/sidebar"; // generated from openapi/openapi.yaml (npm run gen-api)

const sidebars: SidebarsConfig = {
  docs: [
    "intro",
    { type: "category", label: "Concepts", collapsed: false, items: ["concepts/how-detection-works", "concepts/glossary", "concepts/from-data-to-case", "concepts/threat-monitoring", "concepts/threat-intelligence", "concepts/fraud-pentesting", "concepts/coverage", "concepts/organisations"] },
    { type: "category", label: "Processes", collapsed: false, items: ["processes/detection-cycle", "processes/improvement-cycle", "processes/governance"] },
  ],
  guides: [
    "guides/index",
    "guides/add-a-source",
    "guides/calibrate-a-scenario",
    "guides/run-an-analysis",
    "guides/monitor-online-scams",
    "guides/handle-alerts",
    "guides/investigate-and-open-a-case",
    "guides/hunt-a-kit",
    "guides/share-threat-intelligence",
    "guides/run-a-pentest",
    "guides/write-a-scenario",
    "guides/export-to-another-engine",
    "guides/edit-a-triage",
    "guides/manage-scenarios-with-the-api",
    "guides/connect-an-ai-assistant",
    "guides/work-with-claude",
  ],
  api: [
    "integration/contract",
    { type: "category", label: "API reference", link: { type: "doc", id: "api/fraud-engineering-studio-api" }, items: apiSidebar },
  ],
};

export default sidebars;
