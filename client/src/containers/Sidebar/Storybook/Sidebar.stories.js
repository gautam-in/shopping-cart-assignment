import SidebarComponent  from '../Sidebar';
import { data } from "../Data";

export default {
  title: 'Sabka Bazar/Organisms/Sidebar',
  component: SidebarComponent,
};

const SidebarStory = (args) => <SidebarComponent {...args}/>;

export const Sidebar = SidebarStory.bind({});

Sidebar.args = {
    data
};
