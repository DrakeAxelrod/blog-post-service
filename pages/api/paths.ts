import { get_all_paths } from "lib/mdx";
import { Req, Res } from "types/common";

const handler = async (req: Req, res: Res) => {
  const paths = await get_all_paths()
  res.status(200).json(paths);
}
export default handler
