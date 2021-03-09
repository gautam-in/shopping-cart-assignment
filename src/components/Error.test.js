import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Error from './Error';

Enzyme.configure({adapter: new Adapter()});

const wrapper = shallow(<Error />);

it('show error message text',()=>{
    console.log(wrapper.find('.error-info').text());
    expect(wrapper.find('.error-info').text()).toBe('Page Not Found!<Link />');
});