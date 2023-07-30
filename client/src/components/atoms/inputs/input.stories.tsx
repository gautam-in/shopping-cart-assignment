import { StoryObj } from "@storybook/react";

import { spacingControls } from "../../../cva-utils/spacings";
import { Input, InputProps } from ".";
import { Flex } from "..";

export default {
  title: "Atoms/Forms/Input",
};

const { spacingOptions, spacingLabels } = spacingControls();

export const Playground: StoryObj<InputProps> = {
  args: {
    label: "First Name",
    error: "",
    m: "xs",
  },
  argTypes: {
    label: {
      name: "label",
      type: { name: "string", required: false },
      description: "Label / Placeholder text for input",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "-" },
      },
      control: {
        type: "text",
      },
    },
    m: {
      name: "margin",
      type: { name: "string", required: false },
      options: spacingOptions,
      description: `Margin CSS prop for the Component shorthand for padding.
        We also have mt, mb, ml, mr.`,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "-" },
      },
      control: {
        type: "select",
        labels: spacingLabels,
      },
    },
  },
  render: (args) => <Input {...args} />,
};

export const Default: StoryObj<InputProps> = {
  args: {},
  argTypes: {},
  render: () => {
    return (
      <Flex direction="col" gap="lg">
        <Input label="First Name" />
      </Flex>
    );
  },
};
