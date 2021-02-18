import { Button } from '@material-ui/core';
import {configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Signin from './Signin';

configure({adapter:new Adapter()})

describe('<Signin />',()=>{
    const wrapper = shallow(<Signin />)
    it('should render signin component',()=>{
        expect(wrapper.find(Button)).toHaveLength(1)
    })

    it('should have two input fields',()=>{
        expect(wrapper.find('input')).toHaveLength(2)
    })
})