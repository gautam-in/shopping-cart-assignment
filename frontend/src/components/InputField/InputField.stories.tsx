import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import InputField from "./InputField";

export default {
  title: "Components/InputField",
  component: InputField,
  args: {},
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const Story = Template.bind({});
Story.args = {
  labelText: "Email",
};
