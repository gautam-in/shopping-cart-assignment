// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from "../../../server/products/index.get.json";

export default function handler(req, res) {
  const { categoryId } = req.query;
  const filtered_data = data.filter((item) => item.category == categoryId);
  res.status(200).json(filtered_data);
}
