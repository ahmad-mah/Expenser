const fs = require("fs");
const path = require("path");

const projectName = process.argv[2];

if (!projectName) {
  console.log("Usage: node index.js <project-name>");
  process.exit(1);
}

const base = path.join(process.cwd(), projectName);

const folders = [
  "src/config",
  "src/routes",
  "src/controllers",
  "src/services",
  "src/middlewares",
  "src/utils",
];

folders.forEach((folder) => {
  fs.mkdirSync(path.join(base, folder), { recursive: true });
});

fs.writeFileSync(
  path.join(base, "src/app.js"),
  `const express = require("express");
const app = express();

app.use(express.json());

module.exports = app;`
);

fs.writeFileSync(
  path.join(base, "src/server.js"),
  `const app = require("./app");

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});`
);

console.log("Project created:", projectName);