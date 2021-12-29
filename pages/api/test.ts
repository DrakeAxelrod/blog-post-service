import { Req, Res } from "types/common";

const handler = async (req: Req, res: Res) => {
  res.status(200).json({});
};

export default handler;
