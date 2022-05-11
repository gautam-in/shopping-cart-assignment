import HeaderComponent  from '../Header';
import { customViewports } from "../../../../.storybook/preview"


export default {
  title: 'Sabka Bazar/Organisms/Header/Tablet',
  component: HeaderComponent,
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
    chromatic: {
      viewports: customViewports.ipadLarge.viewports,
    },
  },

};

const HeaderStory = () => <HeaderComponent />;

export const Header = HeaderStory.bind({});

