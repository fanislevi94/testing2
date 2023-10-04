// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("imageUrl " + req.body.imageUrl);
  console.log("title " + req.body.title);
  console.log("date " + req.body.date);
  console.log("description " + req.body.description);
  if (req.method == "POST") {
    const user = await prisma.Projects.create({
      data: {
        imageUrl: req.body.imageUrl,
        title: req.body.title,
        date: new Date(),
        description: req.body.description,
        user: {
          connect: {
            id: 1,
          },
        },
      },
    });
    console.log("call create fani datas");
    return res.status(200).json({ user: user });
  }
}
