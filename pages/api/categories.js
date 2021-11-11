import categoryData from "./categories/index.get.json";

export default function handler(req, res) {
  res.status(200).json(categoryData);
}
