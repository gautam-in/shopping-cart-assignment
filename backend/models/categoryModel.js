import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String
    },
    enabled: {
      type: Boolean,
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    key: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Category", categorySchema);

export default Product;
