import { StoryObj } from "@storybook/react";

import { Heading, HeadingProps } from ".";

export default {
  title: "Atoms/Typography/Heading",
};

export const Playground: StoryObj<HeadingProps> = {
  args: {
    variant: "h3",
    noOfLines: 3,
  },
  argTypes: {
    variant: {
      name: "variant",
      type: { name: "string", required: false },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
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
  render: (args: HeadingProps) => {
    return (
      <Heading {...args}>
        In love with React, Remix.js, headless Shopify and Storyblok headles cms
        for creating engaging ecommerce experiences.
      </Heading>
    );
  },
};

export const Default = {
  render: () => (
    <Heading noOfLines={1}>
      In love with React, Remix.js, headless Shopify and Storyblok headles cms
      for creating engaging ecommerce experiences.
    </Heading>
  ),
};
