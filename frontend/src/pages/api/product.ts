// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import productData from "@/data/products/index.get.json";

export interface Product {
  name: string;
  imageURL: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  sku: string;
  id: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  if (req.query && req.query?.id) {
    const filterData = productData?.filter(
      ({ category }) => category === req.query?.id
    );
    res.status(200).json(filterData);
  } else {
    res.status(200).json(productData);
  }
}
