import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import InputField from ".";

export default {
  title: "Components/InputField",
  component: InputField,
  args: {},
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const Input = Template.bind({});
Input.args = {
  labelText: "Email",
};
