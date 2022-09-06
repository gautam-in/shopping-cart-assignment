const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  products: [
    {
      productId: String,
      stock:Number,
      quantity: Number,
      name: String,
      price: Number,
      productImg : String
    },
  ],
});

module.exports = mongoose.model("cart", CartSchema);
