import { shallow,configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import RegisterComponent from '../../components/RegisterComponent';
  
configure({ adapter: new Adapter() })

describe('RegisterComponent rendering', () => {
    it('should render our Snapshots correctly', () => {
        const wrapper = shallow(<RegisterComponent />);
        expect(wrapper).toMatchSnapshot();
    });
});