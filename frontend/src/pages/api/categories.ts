// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import categoiesData from "@/data/categories/index.get.json";

export interface Category {
  name: string;
  key: string;
  description: string;
  enabled: boolean;
  order: number;
  imageUrl?: string;
  id: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Category[]>
) {
  const filterData = categoiesData
    ?.filter(({ order, enabled }) => order > 0 && enabled)
    .sort((a, b) => a.order - b.order);
  res.status(200).json(filterData);
}
