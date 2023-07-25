import { StoryObj } from "@storybook/react";

import { Text, TextProps } from ".";

export default {
  title: "Atoms/Typography/Text",
};

export const Playground: StoryObj<TextProps> = {
  args: {
    variant: "p",
    noOfLines: 4,
  },
  argTypes: {
    variant: {
      name: "variant",
      type: { name: "string", required: false },
      options: ["p", "span"],
      description: `Responsive Values.
        The font size of the heading will
        automatically decrease in size for smaller screens`,
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "h3" },
      },
      control: {
        type: "select",
      },
    },
    noOfLines: {
      name: "noOfLines",
      type: { name: "number", required: false },
      description: "Number of Lines to show",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "-" },
      },
    },
  },
  render: (args: TextProps) => (
    <Text {...args}>
      Lorem ipsum is placeholder text commonly used in the graphic, print, and
      publishing industries for previewing layouts and visual mockups.
    </Text>
  ),
};

export const Default = {
  render: () => (
    <Text>
      Text component is the used to render text and paragraphs within an
      interface. It renders a p tag by default.
    </Text>
  ),
};
