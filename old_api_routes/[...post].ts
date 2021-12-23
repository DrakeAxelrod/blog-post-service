
import { globby } from "globby";
import { join } from "path";
import { Req, Res } from "types/common";
import { readJsonSync } from "fs-extra";
import { public_dir } from "lib/utils/io";

const handler = async (req: Req, res: Res) => {
  const file = join(public_dir, ...req.query.post) + ".json";
  // const file = req.query.post as string;
  // const file_paths = await globby(`${public_dir}/**/*`);
  let post = { file: file };
  // file_paths.filter((path) => {
  //   if (path.split("/").pop() === `${file}.json`) {
  //     post = readJsonSync(path)
  //   }
  // });

  res.status(200).json(JSON.stringify(post, null, 2));
};
export default handler;
