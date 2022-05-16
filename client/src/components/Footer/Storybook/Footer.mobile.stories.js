import FooterComponent  from '../Footer';
import { customViewports } from "../../../../.storybook/preview"


export default {
  title: 'Sabka Bazar/Organisms/Footer/Mobile',
  component: FooterComponent,
  parameters: {
    viewport: {
      defaultViewport: 'iphoneSmall',
    },
    chromatic: {
      viewports: customViewports.iphoneSmall.viewports,
    },
  },

};

const FooterStory = () => <FooterComponent />;

export const Footer = FooterStory.bind({});

