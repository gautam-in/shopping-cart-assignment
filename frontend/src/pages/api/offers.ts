// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import OfferListData from "@/data/banners/index.get.json";

export interface Offer {
  bannerImageUrl: string;
  bannerImageAlt: string;
  isActive: boolean;
  order: number;
  id: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Offer[]>
) {
  const filterData = OfferListData?.filter(({ isActive }) => isActive).sort(
    (a, b) => a.order - b.order
  );
  res.status(200).json(filterData);
}
