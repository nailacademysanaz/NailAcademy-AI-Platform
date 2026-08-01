import path from "node:path";

export const ROOT_DIR = path.resolve(
  process.cwd()
);

export function logHeader(title: string) {
  console.log("");
  console.log("=================================");
  console.log(title);
  console.log("=================================");
  console.log("");
}
