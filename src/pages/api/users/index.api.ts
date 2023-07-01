import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "nookies";

import { prisma } from "@/lib/prisma";

type Error = {
  message: string;
};

type Data = {
  user: User;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, username } = req.body;

  const userAlreadyExists = await prisma.user.findFirst({
    where: {
      username,
    },
  });

  if (userAlreadyExists)
    return res.status(400).json({ message: "Username already exists" });

  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  });

  setCookie({ res }, "@ignitecall:userId", user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });

  return res.status(200).json({ user });
}
