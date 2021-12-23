import { public_dir } from "@utils/io";
import { Req, Res } from "types/common";
import { globby } from "globby";
import { join } from "path";

const handler = async (req: Req, res: Res) => {
  const file_paths = await globby(`${public_dir}/**/*`);
  res.status(200).json(file_paths.map((path) => path.replace(join(process.cwd(), "public"), "")));
};
export default handler;
