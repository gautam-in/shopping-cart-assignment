import { shallow,configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import LoginComponent from '../../components/LoginComponent';
  
configure({ adapter: new Adapter() })

describe('LoginComponent rendering', () => {
    it('should render our Snapshots correctly', () => {
        const wrapper = shallow(<LoginComponent />);
        expect(wrapper).toMatchSnapshot();
    });
});