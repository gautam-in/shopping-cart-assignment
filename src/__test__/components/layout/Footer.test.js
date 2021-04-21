import { shallow,configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import  Footer from '../../../components/layout/Footer';
  
configure({ adapter: new Adapter() })


describe('Footer Snapshots', () => {
    it('should render our Snapshots correctly', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toMatchSnapshot();
    });

    it('render text', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toEqual(' Copyright © 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd.');
      });
});