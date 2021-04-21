import { shallow,configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Home from "../../components/pages/Home";
import SliderComponent from '../../components/SliderComponent';

configure({ adapter: new Adapter() })


describe('Home render', () => {
    it('should render our Snapshots correctly', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper).toMatchSnapshot();
    });

    
    it('should render SliderComponent', () => {
        const wrapper = shallow(<Home />);
        const sliderComponent = wrapper.find(SliderComponent);
    expect(sliderComponent.exists()).toBe(true);
    })
});