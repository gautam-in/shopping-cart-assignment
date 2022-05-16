import HeaderComponent  from '../Header';
import { customViewports } from "../../../../.storybook/preview"


export default {
  title: 'Sabka Bazar/Organisms/Header/Mobile',
  component: HeaderComponent,
  parameters: {
    viewport: {
      defaultViewport: 'iphoneSmall',
    },
    chromatic: {
      viewports: customViewports.iphoneSmall.viewports,
    },
  },

};

const HeaderStory = () => <HeaderComponent />;

export const Header = HeaderStory.bind({});

