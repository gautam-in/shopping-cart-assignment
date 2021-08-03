const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.models.Cart || mongoose.model("Cart", CartSchema);
