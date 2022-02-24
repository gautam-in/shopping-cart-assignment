import {
    shallow,
} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'
import ProductList from './ProductList';

Enzyme.configure({
    adapter: new Adapter()
});

it('redner card component', () => {
    expect(shallow( < ProductList /> )).toMatchSnapshot();
});