import * as React from "react";

import { Flex, FlexProps } from "../src/components/atoms";

import "../src/scss/main.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

function Container(props: FlexProps) {
  const { style, children, ...delegated } = props;

  return (
    <Flex
      align="start"
      p="md"
      style={{ minHeight: "100vh", ...style }}
      {...delegated}
    >
      {children}
    </Flex>
  );
}

const StoriesWithTheme = (StoryFun, context) => {
  const theme = context.parameters.theme || context.globals.theme;

  if (theme === "split") {
    return (
      <Flex>
        <Container style={{ flexBasis: "50%" }} className="root pink-theme">
          <StoryFun />
        </Container>
        <Container style={{ flexBasis: "50%" }} className="root blue-theme">
          <StoryFun />
        </Container>
      </Flex>
    );
  }

  return (
    <Container className={`root ${theme}`}>
      <StoryFun />
    </Container>
  );
};

export const globalTypes = {
  theme: {
    name: "Change Theme",
    description: "Global theme for components",
    defaultValue: "pink-theme",
    toolbar: {
      // The icon for the toolbar item
      icon: "circlehollow",
      // Array of options
      items: [
        { value: "pink-theme", icon: "circlehollow", title: "pink-view" },
        { value: "blue-theme", icon: "circle", title: "blue-view" },
        { value: "split", icon: "graphline", title: "split-view" },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

/**
 * This decorator is a global decorator will
 * be applied to each and every story
 */
export const decorators = [StoriesWithTheme];
