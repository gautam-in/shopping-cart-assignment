import FooterComponent  from '../Footer';
import { customViewports } from "../../../../.storybook/preview"

export default {
  title: 'Sabka Bazar/Organisms/Footer/Tablet',
  component: FooterComponent,
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
    chromatic: {
      viewports: customViewports.ipadLarge.viewports,
    },
  },

};

const FooterStory = () => <FooterComponent />;

export const Footer = FooterStory.bind({});

