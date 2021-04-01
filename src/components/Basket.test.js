import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Basket from './Basket';
import Cart from '../presentations/Cart';
const buildStore = configureStore([thunk]);

Enzyme.configure({adapter: new Adapter(),disableLifecycleMethods: false,lifecycleExperimental: true,});
let wrapper; let shallowWrapper; let store;
const props = {productReducer:{cartItems:[]},resetCartData:()=>{},signinReducer:{userData:{userEmail:''}},signUpReducer:{userData:{userEmail:''}}};
describe('Basket',()=>{
    beforeAll(()=>{
        store = buildStore(props);
        shallowWrapper = shallow(<Provider store={store} {...props}>
            <Basket />
        </Provider>);
        props.router = shallowWrapper.instance().props.router;
        store = buildStore(props);
    });
    beforeEach(()=>{
        wrapper = mount(<Provider store={store} {...props}>
            <Basket />
        </Provider>);
    });
    afterEach(()=>{
        wrapper.unmount();
    });
    afterAll(()=>{
        shallowWrapper.unmount();
    });
    it('Rendered Basket Correctly',()=>{
        expect(shallowWrapper).toMatchSnapshot()
    });
    describe('initial load',()=>{
        it('check for header',()=>{
            expect(wrapper.find('Header').exists()).toBe(true);
        });
        it('check for footer',()=>{
            expect(wrapper.find('Footer').exists()).toBeFalsy();
        });
        describe('basket state',()=>{
            it('inital state of basket',()=>{
                expect(shallowWrapper.dive().dive().state()).toEqual({});
            })
        })
    });
    it('cart component present',()=>{
        expect(wrapper.find('Cart').exists()).toBeTruthy();
    })
})