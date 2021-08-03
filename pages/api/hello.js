// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../utils/dbConnect";
import Cart from "../../models/Cart";

dbConnect();

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const carts = await Cart.find({});
        res.status(200).json({ success: true, data: carts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const cart = await Cart.create(req.body);
        res.status(201).json({ success: true, data: cart });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
