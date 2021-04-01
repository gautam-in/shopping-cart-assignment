import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Signup from './Signup';
import {act} from 'react-dom/test-utils';
import Header from '../presentations/Header';
import Footer from '../presentations/Footer';
import {validEmail} from '../utils';

const buildStore = configureStore([thunk]);
const whenStable = async () => {
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
};
Enzyme.configure({adapter: new Adapter(),disableLifecycleMethods: false,lifecycleExperimental: true,});
const simulateChangeInput = (wrapper,inputSelector,newVal)=>{
    const input = wrapper.find(inputSelector).at(0);
    input.simulate('change',{
        target: {name:'name', value: newVal}
    })
    return wrapper.find(inputSelector);
}

describe('Signup',()=>{
    
    const props={productReducer:{cartItems:[]},cartClick:()=>{},signinReducer:{userData:{userEmail:''}},signUpReducer:{userData:{userEmail:''}},router:{push:(data)=>{'/'+data+''}}};//router:{push:()=>{}},
    let wrapper,shallowWrapper,store;
    beforeAll(()=>{
      store = buildStore(props);

      shallowWrapper = shallow(<Provider store={store} {...props}>
        <Signup />
      </Provider>);
      props.router = shallowWrapper.instance().props.router;
      store = buildStore(props);
    });
    beforeEach(() => {
      wrapper = mount(<Provider store={store} {...props}>
        <Signup />
      </Provider>);
    });
    afterEach(() => {
      wrapper.unmount();
    });
    afterAll(()=>{
      shallowWrapper.unmount();
    });
    it('Header is available',()=>{
      // console.warn(shallowWrapper.dive().dive().dive().instance()); //signin instance dive(1) - connect/Provider, dive(2) - withrouter, dive(3) - signin
      // console.warn(shallowWrapper.instance().props.router); // got router from props - from Provider instance
      expect(wrapper.find('Header').exists()).toBe(true);
    });
    it('Footer is available',()=>{
      expect(wrapper.find('Footer').exists()).toBe(true);
    })
    it('Should validate register button after input change', async ()=>{
        
        // console.warn(wrapper.props());
        const button = wrapper.find('button');
        const updatedEmailInput = simulateChangeInput(wrapper,'input#email-input','pkzpavan@gmail.com');
        expect(updatedEmailInput.props().value).toEqual('pkzpavan@gmail.com');
        const updatedPasswordInput = simulateChangeInput(wrapper,'input#password-input','Pavan1');
        expect(updatedPasswordInput.props().value).toEqual('Pavan1');
        const updatedCPasswordInput = simulateChangeInput(wrapper,'input#cpassword-input','Pavan1');
        expect(updatedCPasswordInput.props().value).toEqual('Pavan1');
        const updatedFnameInput = simulateChangeInput(wrapper,'input#fname-input','pavan');
        expect(updatedFnameInput.props().value).toEqual('pavan');
        const updatedLnameInput = simulateChangeInput(wrapper,'input#lname-input','kumar');
        expect(updatedLnameInput.props().value).toEqual('kumar');
        button.simulate('click');
        await whenStable();
        if(updatedCPasswordInput.props().value != updatedPasswordInput.props().value || !validEmail(updatedEmailInput.props().value)){
            expect(wrapper.find('.errorArea').length).toBe(1);
        } else {
            expect(wrapper.find('.errorArea').length).toBe(0);
        }
        // expect(wrapper.find('.errorArea').childAt(0).text()).toBe('Invalid login credentials.');
    });
    
});
