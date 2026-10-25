// @ts-check
// Documentation of the Fraud Engineering Studio -- Docusaurus 3 + docusaurus-openapi-docs (API reference generated
// from openapi/openapi.yaml, the contract the Studio serves at /api/openapi.yaml). Published on GitHub Pages.
const { themes: prismThemes } = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Fraud Engineering Studio",
  tagline: "Detect, investigate and act on online fraud — with detections you can read, test and audit.",
  favicon: "img/favicon.svg",
  url: "https://datavillage-me.github.io",
  baseUrl: "/fraud-engineering-studio-docs/",
  organizationName: "datavillage-me",
  projectName: "fraud-engineering-studio-docs",
  trailingSlash: false,
  onBrokenLinks: "throw",
  markdown: { hooks: { onBrokenMarkdownLinks: "throw" } },
  i18n: { defaultLocale: "en", locales: ["en"] },
  headTags: [
    { tagName: "link", attributes: { rel: "preconnect", href: "https://fonts.googleapis.com" } },
    { tagName: "link", attributes: { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" } },
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.ts"),
          docItemComponent: "@theme/ApiItem",
          editUrl: "https://github.com/datavillage-me/fraud-engineering-studio-docs/edit/main/",
          showLastUpdateTime: false,
        },
        blog: false,
        theme: { customCss: require.resolve("./src/css/custom.css") },
      }),
    ],
  ],
  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          studio: {
            specPath: "openapi/openapi.yaml",
            outputDir: "docs/api",
            sidebarOptions: { groupPathsBy: "tag", categoryLinkSource: "tag" },
            showSchemas: false,
          },
        },
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: { defaultMode: "light", respectPrefersColorScheme: true },
      navbar: {
        title: "Fraud Engineering Studio",
        logo: { alt: "Fraud Engineering Studio", src: "img/logo.svg" },
        style: "dark",
        items: [
          { type: "docSidebar", sidebarId: "docs", position: "left", label: "Documentation" },
          { type: "docSidebar", sidebarId: "guides", position: "left", label: "Guides" },
          { type: "docSidebar", sidebarId: "api", position: "left", label: "API" },
          { to: "/whats-new", label: "What's new", position: "right" },
          { href: "https://datavillage.ai", label: "Datavillage", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          { title: "Documentation", items: [{ label: "Overview", to: "/" }, { label: "Glossary", to: "/concepts/glossary" }, { label: "The detection cycle", to: "/processes/detection-cycle" }] },
          { title: "Guides", items: [{ label: "Write a scenario", to: "/guides/write-a-scenario" }, { label: "Investigate and open a case", to: "/guides/investigate-and-open-a-case" }] },
          { title: "API", items: [{ label: "Integration contract", to: "/integration/contract" }, { label: "API reference", to: "/api/fraud-engineering-studio-api" }] },
          { title: "Datavillage", items: [{ label: "Website", href: "https://datavillage.ai" }] },
        ],
        copyright: `© ${new Date().getFullYear()} Datavillage`,
      },
      prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula, additionalLanguages: ["bash", "json", "yaml", "gherkin"] },
      docs: { sidebar: { hideable: true } },
      languageTabs: [
        { highlight: "bash", language: "curl", logoClass: "curl" },
        { highlight: "python", language: "python", logoClass: "python", variant: "requests" },
        { highlight: "javascript", language: "nodejs", logoClass: "nodejs", variant: "axios" },
        { highlight: "java", language: "java", logoClass: "java", variant: "unirest" },
        { highlight: "csharp", language: "csharp", logoClass: "csharp", variant: "httpclient" },
      ],
    }),
};

module.exports = config;
