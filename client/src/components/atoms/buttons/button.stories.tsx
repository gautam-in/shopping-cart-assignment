import { StoryObj } from "@storybook/react";

import { spacingControls } from "../../../cva-utils/spacings";
import { Flex } from "..";
import { Button, ButtonProps } from "./button";

export default {
  title: "Atoms/Forms/Button",
};

const { spacingOptions, spacingLabels } = spacingControls();

export const Playground: StoryObj<ButtonProps> = {
  args: {
    variant: "solid",
    size: "md",
    isFullWidth: false,
    isPill: false,
    m: "sm",
    disabled: false,
  },
  argTypes: {
    variant: {
      name: "variant",
      type: { name: "string", required: false },
      options: ["outline", "solid"],
      description: "Variant for the Badge",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "subtle" },
      },
      control: {
        type: "select",
      },
    },
    size: {
      name: "size (s)",
      type: { name: "string", required: false },
      options: ["xs", "sm", "md", "lg"],
      description: "Tag height width and horizontal padding",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
      },
      control: {
        type: "select",
      },
    },
    isFullWidth: {
      name: "isFullWidth",
      type: { name: "boolean", required: false },
      description: "Full width button",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    isPill: {
      name: "isPill",
      type: { name: "boolean", required: false },
      description: "button with border radius",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    disabled: {
      name: "disabled",
      type: { name: "boolean", required: false },
      description: "Pass the isDisable prop to show disabled state.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
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
  render: (args) => <Button {...args}>Button</Button>,
};

export const Default: StoryObj<ButtonProps> = {
  args: {
    size: "md",
  },
  argTypes: {
    size: {
      name: "size (s)",
      type: { name: "string", required: false },
      options: ["xs", "sm", "md", "lg"],
      description: "Tag height width and horizontal padding",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "md" },
      },
      control: {
        type: "select",
      },
    },
  },
  render: (args) => {
    const { size } = args;

    return (
      <Flex direction="col" gap="lg">
        <Flex gap="lg" align="center">
          <Button size="xs">Button</Button>
          <Button size="sm">Button</Button>
          <Button size="md">Button</Button>
          <Button size="lg">Button</Button>
        </Flex>
        <Flex gap="lg" align="center">
          <Button size={size} variant="solid">
            Button
          </Button>
          <Button size={size} variant="outline">
            Button
          </Button>
        </Flex>
      </Flex>
    );
  },
};
