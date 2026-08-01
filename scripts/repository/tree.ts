import fs from "node:fs";
import path from "node:path";
import { ROOT_DIR, logHeader } from "../runtime/index.js";


const IGNORE = new Set([
  ".git",
  "node_modules",
  ".next",
  "__pycache__",
  ".venv"
]);


function printTree(
  dir: string,
  prefix = ""
) {

  const items = fs.readdirSync(dir);

  for (const item of items) {

    if (IGNORE.has(item)) {
      continue;
    }

    const fullPath = path.join(dir, item);

    const isDirectory =
      fs.statSync(fullPath).isDirectory();

    console.log(
      `${prefix}${isDirectory ? "├── " : "│   "}${item}`
    );

    if (isDirectory) {
      printTree(
        fullPath,
        prefix + "│   "
      );
    }
  }
}


logHeader(
  "NailAcademy AI Platform Repository Tree"
);


printTree(ROOT_DIR);
