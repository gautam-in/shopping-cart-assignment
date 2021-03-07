import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Signin from './Signin';
import {act} from 'react-dom/test-utils';
import { routerReducer } from 'react-router-redux';
import sinon from 'sinon';
import App from './App';
const mockStore = configureStore(); //configureMockStore();
const buildStore = configureStore([thunk]);
const whenStable = async () => {
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
};
Enzyme.configure({adapter: new Adapter()});//,disableLifecycleMethods: true
const simulateChangeInput = (wrapper,inputSelector,newVal)=>{
    const input = wrapper.find(inputSelector).at(0);
    input.simulate('change',{
        target: {name:'name', value: newVal}
    })
    return wrapper.find(inputSelector);
}
describe('Signin Page validation',()=>{
    // const setUpFn = props => {
    //     return mount(
    //       <Provider store={store}>
    //         <App />
    //       </Provider>
    //     );
    //   };
    
    //   let wrapper;
    //   beforeEach(() => {
    //     wrapper = setUpFn();
    //   });
    let fetch;
    let routing = routerReducer;
    const props={productReducer:{cartItems:[]},cartClick:()=>{},signinReducer:{userData:{userEmail:''}},signUpReducer:{userData:{userEmail:''}},...routing};//router:{push:()=>{}},
    let store;// = mockStore({});

    beforeEach(() => {
      fetch = global.fetch;
      store = buildStore(props);
    });
    afterEach(() => {
      global.fetch = fetch;
    });
    afterAll(()=>{
      wrapper.unmount();
    });
    it('Should validate login button after input change', async ()=>{
        // const foo = true;
        // const wrapper = shallow(<Signin />,{ context: { store } });

        // const wrapper = shallow(
        // <Provider store={store}>
        //     <Signin {...props}>
        //     </Signin> 
        // </Provider>);//.props();
        const wrapper = mount(<Provider store={store} {...props}>
          <Signin />
          </Provider>);
        // const wrapper = shallow(
        // <Provider store={store} {...props}>
        //     <Signin {...props} />
        // </Provider>).dive();
        // wrapper.setProps({...props});
        // console.warn(wrapper.children().props());
        // console.warn(wrapper.props().children.props);
        const button = wrapper.find('button');
        // .childAt(1).dive();
        // expect(wrapper.contains(<div className="row" />).toBeEqual(true));
        // const button = wrapper.find('button');
        // button.simulate('click');
        // const button = wrapper.find('.login').at(0).simulate('click');
        // const inputs = wrapper.find('.inputText');
        // console.warn(button);
        // console.log(inputs);
        // button.simulate('click');
        // // fixture.detectChanges();
        // await whenStable();
        // let emailInput = wrapper.find('input.email-input');
        const updatedEmailInput = simulateChangeInput(wrapper,'input#email-input','pkzpavan@gmail.com');
        // console.warn(updatedEmailInput.props().value);
        expect(updatedEmailInput.props().value).toEqual('pkzpavan@gmail.com');
        const updatedPasswordInput = simulateChangeInput(wrapper,'input#password-input','Pavan1');
        expect(updatedPasswordInput.props().value).toEqual('Pavan1');
        button.simulate('click');
        // // fixture.detectChanges();
        await whenStable();
        expect(wrapper.find('.errorArea').length).toBe(0);
        // expect(wrapper.find('.errorArea').childAt(0).text()).toBe('Invalid login credentials.');
    })
})