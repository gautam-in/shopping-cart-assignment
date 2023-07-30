import { StoryObj } from "@storybook/react";

import { Box, BoxProps } from ".";
import { spacingControls } from "../../../cva-utils/spacings";

export default {
  title: "Atoms/Layout/Box",
};

const { spacingOptions, spacingLabels } = spacingControls();

export const Playground: StoryObj<BoxProps> = {
  args: {
    p: "sm",
    m: "sm",
  },
  argTypes: {
    p: {
      name: "padding",
      type: { name: "string", required: false },
      options: spacingOptions,
      description: `Padding CSS prop for the Component shorthand for padding.
        We also have pt, pb, pl, pr.`,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "-" },
      },
      control: {
        type: "select",
        labels: spacingLabels,
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
  render: (args) => (
    <Box className="w-full bg-primary color-white" {...args}>
      Box Component
    </Box>
  ),
};

export const Default = () => (
  <Box className="w-full bg-primary color-white" p="lg" color="white">
    Box
  </Box>
);
