import CarouselComponent  from '../Carousel';
import { customViewports } from "../../../../.storybook/preview"
import { Images } from '../Data';

export default {
  title: 'Sabka Bazar/Molecules/Carousel/Mobile',
  component: CarouselComponent,
  parameters: {
    viewport: {
      defaultViewport: 'iphoneSmall',
    },
    chromatic: {
      viewports: customViewports.iphoneSmall.viewports,
    },
  },
};

const CarouselStory = (args) => <CarouselComponent {...args}/>;

export const Carousel = CarouselStory.bind({});
Carousel.args = {
    data: Images
};
