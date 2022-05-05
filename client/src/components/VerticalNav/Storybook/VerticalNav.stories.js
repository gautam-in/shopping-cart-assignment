import VerticalNavComponent  from '../VerticalNav';
import { data } from "../Data";

export default {
  title: 'Sabka Bazar/Molecules/VerticalNav',
  component: VerticalNavComponent,
};

const VerticalNavStory = (args) => <VerticalNavComponent {...args}/>;

export const VerticalNav = VerticalNavStory.bind({});

VerticalNav.args = {
    data
};
