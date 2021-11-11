import data from "./banners/index.get.json";

export default function handler(req, res) {
  res.status(200).json(data);
}
