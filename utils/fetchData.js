import path from "path";
import { promises as fs } from "fs";

export async function handler() {
  const jsonDirectory = await path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");
  const data = JSON.parse(fileContents);
  return data;
}
