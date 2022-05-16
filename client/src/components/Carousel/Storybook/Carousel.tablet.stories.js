import CarouselComponent  from '../Carousel';
import { customViewports } from "../../../../.storybook/preview"
import { Images } from '../Data';

export default {
  title: 'Sabka Bazar/Molecules/Carousel/Tablet',
  component: CarouselComponent,
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
    chromatic: {
      viewports: customViewports.ipadLarge.viewports,
    },
  },
};

const CarouselStory = (args) => <CarouselComponent {...args}/>;

export const Carousel = CarouselStory.bind({});
Carousel.args = {
    data: Images
};
