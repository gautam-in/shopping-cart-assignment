import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Header from './Header';
import {getViewPortDimensions} from '../utils';
const buildStore = configureStore([thunk]);
Enzyme.configure({adapter: new Adapter(),disableLifecycleMethods: false,lifecycleExperimental: true,});

describe('Header render part',()=>{
    const cartClick = jest.fn();
    const props={
        productReducer:{cartItems:[]},
        cartClick,
        signinReducer:{userData:{userEmail:''}},
        signUpReducer:{userData:{userEmail:''}},
        router:{push:(data)=>{'/'+data+''}}
    };
    let wrapper,shallowWrapper,store;
    const initialState = {
        isMobileView: false,
        logo: '',
        clickable: false,
        userName:'',
        itemCount: 0,
        dimensions:getViewPortDimensions()
    };
    let spyCartClick;
    beforeAll(()=>{
        store = buildStore(props);
        shallowWrapper = shallow(<Provider store={store} {...props}>
          <Header />
        </Provider>);
        // spyCartClick = jest.spyOn(shallowWrapper.dive().dive().instance(),'cartClick');
        // props.router = shallowWrapper.instance().props.router;
        // store = buildStore(props);
    });
    beforeEach(() => {
    // fetch = global.fetch;
        wrapper = mount(<Provider store={store} {...props}>
                        <Header />
                        </Provider>);
        spyCartClick = jest.spyOn(wrapper.instance().props,'cartClick');
    });
    afterEach(() => {
        wrapper.unmount();
    });
    afterAll(()=>{
        shallowWrapper.unmount();
    });
    it('Renders Correctly',()=>{
        expect(shallowWrapper).toMatchSnapshot();
        // console.log(shallowWrapper.dive().dive().state());
    });
    it('initial state',()=>{
        expect(shallowWrapper.dive().dive().state()).toEqual(expect.objectContaining(initialState));
    });
    it('cart count',()=>{
        // console.log(shallowWrapper.dive().props().productInfo.cartItems);
        expect(shallowWrapper.dive().props().productInfo.cartItems).toBe(props.productReducer.cartItems);
    });
    // it('cart click',()=>{
    //     // wrapper.find('.cartArea').at(0).simulate('click');

    //     // expect(cartClick).toHaveBeenCalled();
    //     // expect(props.cartClick).toHaveBeenCalled(0);

    //     // expect(spyCartClick).toHaveBeenCalled(1);
    //     // console.log(wrapper.instance());
    //     // expect(shallowWrapper.dive().dive().instance().cartClick()).toHaveBeenCalled();
    // });
});