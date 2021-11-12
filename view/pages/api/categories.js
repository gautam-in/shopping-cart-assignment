export default async function handler(req, res) {
  const categories = await fetch("http://localhost:5000/categories");

  res.status(200).json(await categories.json());
}
