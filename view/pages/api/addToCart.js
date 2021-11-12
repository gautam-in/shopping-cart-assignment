export default async function handler(req, res) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  };
  const addToCartRes = await fetch("http://localhost:5000/products", options);
  res.status(200).json(await addToCartRes.json());
}
