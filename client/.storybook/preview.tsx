import * as React from "react";

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

const StoriesWithTheme = (StoryFun) => {
  return (
    <div className="root">
      <StoryFun />
    </div>
  );
};

/**
 * This decorator is a global decorator will
 * be applied to each and every story
 */
export const decorators = [StoriesWithTheme];
