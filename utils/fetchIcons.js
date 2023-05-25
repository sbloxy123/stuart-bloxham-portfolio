import { promises as fs } from "fs";
import path from "path";

export const fetchIcons = async () => {
  const imageDirectory = path.join(process.cwd(), "public/images/stack-icons");
  const imageFilenames = await fs.readdir(imageDirectory);
  console.log(imageFilenames);

  return { imageDirectory, imageFilenames };
};
