export default async function handler(req, res) {
  const products = await fetch("http://localhost:5000/products");
  res.status(200).json(await products.json());
}
