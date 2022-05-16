import CarouselComponent  from '../Carousel';
import { Images } from '../Data';

export default {
  title: 'Sabka Bazar/Molecules/Carousel',
  component: CarouselComponent,
};

const CarouselStory = (args) => <CarouselComponent {...args}/>;

export const Carousel = CarouselStory.bind({});
Carousel.args = {
    data: Images
};
