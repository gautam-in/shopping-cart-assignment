export default async function handler(req, res) {
  const response = await fetch("http://localhost:5000/products");
  const banners = await response.json();
  const { categoryId } = req.query;
  const specificProduct = banners.filter((item) => item.category == categoryId);
  res.status(200).json(specificProduct);
}
