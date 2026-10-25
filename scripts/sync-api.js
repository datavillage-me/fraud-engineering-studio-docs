// Copies the contract the Studio implements (../studio/openapi.yaml) into openapi/ -- run when the Studio's API changes,
// then commit openapi/openapi.yaml with the docs. The build reads the copy, so it needs no access to the Studio.
const fs = require("fs");
const path = require("path");
const src = process.argv[2] || path.join(__dirname, "..", "..", "studio", "openapi.yaml");
const dst = path.join(__dirname, "..", "openapi", "openapi.yaml");
if (!fs.existsSync(src)) { console.error(`not found: ${src} (pass the path of the Studio's openapi.yaml)`); process.exit(1); }
fs.copyFileSync(src, dst);
console.log(`openapi/openapi.yaml <- ${src}`);
