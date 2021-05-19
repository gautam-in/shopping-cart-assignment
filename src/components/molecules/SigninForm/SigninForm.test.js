import React from 'react';
import { render, shallow } from "@testing-library/react";
import '@testing-library/jest-dom';
import SigninForm from './SigninForm';

test('should test Signinform component', () => {
    const wrpper = shallow(<SigninForm />);
    expect(wrpper).toMatchSnapshot();
});

