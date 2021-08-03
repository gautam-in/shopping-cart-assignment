import productsData from "./products/index.get.json";

export default function handler(req, res) {
  res.status(200).json(productsData);
}
