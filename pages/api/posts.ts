import { get_all_front_matter } from "lib/mdx";
import { Req, Res } from "types/common";

const handler = async (req: Req, res: Res) => {
  const posts = await get_all_front_matter()
  res.status(200).json(posts);
}
export default handler;
