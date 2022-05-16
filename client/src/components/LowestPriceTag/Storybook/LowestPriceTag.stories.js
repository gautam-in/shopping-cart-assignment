import LowestPriceTagComponent  from '../LowestPriceTag';

export default {
  title: 'Sabka Bazar/Molecules/LowestPriceTag/Desktop',
  component: LowestPriceTagComponent,
};

const LowestPriceTagStory = (args) => <LowestPriceTagComponent {...args}/>;

export const LowestPriceTag = LowestPriceTagStory.bind({});

LowestPriceTag.args = {
    type:"email",
    name:"Email"
};
