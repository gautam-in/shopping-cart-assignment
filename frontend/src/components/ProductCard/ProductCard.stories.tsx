import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import productImgSrc from "../../../public/images/products/fruit-n-veg/apple.jpg";

import ProductCard from ".";

export default {
  title: "Components/ProductCard",
  component: ProductCard,
  args: {},
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const ExampleProductCard = Template.bind({});
ExampleProductCard.args = {
  title: "Apple - Washington, Regular, 4 pcs",
  productImg: productImgSrc,
  description:
    "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
  price: 89,
};
