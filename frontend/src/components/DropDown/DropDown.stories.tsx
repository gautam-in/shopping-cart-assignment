import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import DropDown from ".";

export default {
  title: "Components/DropDown",
  component: DropDown,
  args: {},
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => (
  <DropDown {...args} />
);

export const Example = Template.bind({});
Example.args = {
  label: "Select a Category",
  options: [
    {
      label: "Beverages",
      value: "5b675e5e5936635728f9fc30",
    },
    {
      label: "Bakery Cakes and Dairy",
      value: "5b6899123d1a866534f516de",
    },
    {
      label: "Beauty and Hygiene",
      value: "5b68994e3d1a866534f516df",
    },
    {
      label: "Baby Care",
      value: "5b6899683d1a866534f516e0",
    },
    {
      label: "Fruits & Vegetables",
      value: "5b6899953d1a866534f516e2",
    },
  ],
};
