import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import Data from "types/helloType.api";

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ name: "Jhon Doe" });
};

export default handler;
