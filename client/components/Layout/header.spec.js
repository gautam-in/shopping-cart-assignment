import {shallow} from 'enzyme';
import Header from './Header';

describe('<Header', () => {
    it('should show the header', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('div')).toHaveLength(2);
    })
})