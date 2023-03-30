import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import Button from ".";

export default {
  title: "Components/Button",
  component: Button,
  args: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button",
  variant: "secondary",
};
