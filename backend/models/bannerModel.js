import mongoose from "mongoose";

const bannerSchema = mongoose.Schema(
  {
    bannerImageUrl: {
      type: String
    },
    bannerImageAlt: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
    order: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Banner = mongoose.model("Banner", bannerSchema);

export default Banner;
