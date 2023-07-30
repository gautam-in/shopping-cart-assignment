import { StoryObj } from "@storybook/react";

import { Flex, FlexProps, Spacer } from ".";
import { spacingControls } from "../../../cva-utils/spacings";

const { spacingOptions, spacingLabels } = spacingControls();

export default {
  title: "Atoms/Layout/Flex",
};

function Container(props: FlexProps) {
  const { children, ...delegated } = props;
  return (
    <Flex
      style={{
        minHeight: "100px",
        minWidth: "100px",
      }}
      justify="center"
      align="center"
      {...delegated}
    >
      {children}
    </Flex>
  );
}

export const Playground: StoryObj<FlexProps> = {
  args: {
    direction: "row",
    justify: "start",
    align: "stretch",
    gap: "sm",
  },
  argTypes: {
    direction: {
      name: "direction",
      type: { name: "string", required: false },
      description: "Shorthand for flexDirection style prop",
      options: ["row", "row-reverse", "col", "col-reverse"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "row" },
      },
      control: {
        type: "select",
      },
    },
    justify: {
      name: "justify",
      type: { name: "string", required: false },
      options: ["start", "end", "center", "between", "around", "evenly"],
      description: "Shorthand for justifyContent style prop",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "start" },
      },
      control: {
        type: "select",
      },
    },
    align: {
      name: "align",
      type: { name: "string", required: false },
      options: ["start", "end", "center", "baseline", "stretch"],
      description: "Shorthand for alignItems style prop",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "stretch" },
      },
      control: {
        type: "select",
      },
    },
    gap: {
      name: "gap",
      type: { name: "string", required: false },
      options: spacingOptions,
      description: "Shorthand for flexGap style prop",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "select",
        labels: spacingLabels,
      },
    },
  },
  render: (args) => (
    <Flex className="w-full color-white" p="md" {...args}>
      <Container className="bg-primary">Box 1</Container>
      <Container className="bg-primary">Box 2</Container>
      <Container className="bg-primary">Box 3</Container>
    </Flex>
  ),
};

export const FlexSpacer = {
  args: {
    direction: "row",
  },
  argTypes: {
    direction: {
      name: "direction",
      type: { name: "string", required: false },
      options: ["row", "row-reverse", "col", "col-reverse"],
      description: "Shorthand for flexDirection style prop",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "row" },
      },
      control: {
        type: "select",
      },
    },
  },
  render: (args: FlexProps) => (
    <Flex
      style={{ height: "80vh" }}
      className="w-full color-white"
      p="xs"
      {...args}
    >
      <Container className="bg-primary" p="md">
        Box 1
      </Container>
      <Spacer />
      <Container className="bg-primary" p="md">
        Box 2
      </Container>
    </Flex>
  ),
};

export const Stack: StoryObj<FlexProps> = {
  args: {
    direction: "col",
    gap: "md",
    align: "stretch",
  },
  argTypes: {
    direction: {
      name: "direction",
      type: { name: "string", required: false },
      description: "Shorthand for flexDirection style prop",
      options: ["row", "row-reverse", "col", "col-reverse"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "row" },
      },
      control: {
        type: "select",
      },
    },
    align: {
      name: "align",
      type: { name: "string", required: false },
      options: ["start", "end", "center", "baseline", "stretch"],
      description: "Shorthand for alignItems style prop",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "stretch" },
      },
      control: {
        type: "select",
      },
    },
    gap: {
      name: "gap",
      type: { name: "string", required: false },
      options: spacingOptions,
      description: "Shorthand for flexGap style prop",
      table: {
        type: { summary: "string" },
      },
      control: {
        type: "select",
        labels: spacingLabels,
      },
    },
  },
  render: (args) => (
    <Flex
      style={{ minHeight: "100vh" }}
      className="w-full color-white"
      p="md"
      {...args}
    >
      <Container p="md" className="bg-primary">
        Box 1
      </Container>
      <Container p="md" className="bg-primary">
        Box 2
      </Container>
      <Container p="md" className="bg-primary">
        Box 3
      </Container>
    </Flex>
  ),
};
