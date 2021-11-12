export default async function handler(req, res) {
  const banners = await fetch("http://localhost:5000/banners");
  res.status(200).json(await banners.json());
}
