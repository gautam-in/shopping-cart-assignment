import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
Enzyme.configure({adapter: new Adapter()});
const app = shallow(<App />);
it('Renders App Correctly',()=>{
    expect(app).toMatchSnapshot()
});