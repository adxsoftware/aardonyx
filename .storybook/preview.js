import { withConsole } from "@storybook/addon-console";
import { addDecorator } from "@storybook/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  layout: "centered"
};

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
