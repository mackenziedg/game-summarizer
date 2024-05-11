import type { PageServerLoad } from "./$types";
import * as fs from "fs";

const getFiles: Array<Object> = () => {
  const dir: string = "/llm_data/llm_outputs";
  const files: Array<string> = fs.readdirSync(dir);
  const mostRecentDate: string = files
    .filter((f) => f[0] !== ".")
    .map((f) => f.split("_")[0])
    .reduce((min, v) => (v < min ? v : min));

  return files
    .filter((f) => f.split("_")[0] == mostRecentDate)
    .map((f) => JSON.parse(fs.readFileSync(`${dir}/${f}`, "utf8")));
};

export const load: PageServerLoad = ({ params }) => {
  return {
    summaries: getFiles(),
  };
};
