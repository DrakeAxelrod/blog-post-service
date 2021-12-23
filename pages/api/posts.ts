import { Req, Res } from "types/common";
import { readJsonSync } from "fs-extra";
import { globby } from "globby";
import { public_dir } from "lib/utils/io";

const handler = async (req: Req, res: Res) => {
  const file_paths = await globby(`${public_dir}/**/*`);
  const filtered = file_paths.filter((path) => path.endsWith(".json"));
  const posts = filtered.map((path) => readJsonSync(path))
  res.status(200).json(JSON.stringify(posts, null, 2));
};

export default handler;
