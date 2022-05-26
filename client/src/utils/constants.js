import Arrow from '../components/arrow'
import React from 'react';
export const SLIDER_CONFIG = {
    dots: true,
    infinite: false,
    speed: 500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <Arrow next={true}/>,
    prevArrow: <Arrow />
  };

  export const ROUTES = {
    signin: '/signIn',
    signup: '/signUp',
    products: '/products',
    home: '/'
  }

  export const  SIGNIN_FORM = [{
    id: 'email',
    type: 'email',
    label: 'Email',
    styles: '',
    value: '',
    pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    errorMsg: 'Enter a valid email address',
    required:true,
    ref: React.createRef()
  }, {
    id: 'password',
    type: 'password',
    label: 'Password',
    styles: '',
    value: '',
    pattern:/^(?!.* )(?=.*\d)(?=.*[a-zA-Z]).{6,}$/,
    errorMsg: 'Password must contain minimum 6 characters, one number, one alphabet and without spaces',
    required:true,
    ref: React.createRef()
  }]



  export const  SIGNUP_FORM = [{
    id: 'firstName',
    type: 'text',
    label: 'First Name',
    styles: '',
    value: '',
    pattern: /^(?!\s*$).+/,
    errorMsg: 'First name should not be empty',
    required:true
  },{
    id: 'lasttName',
    type: 'text',
    label: 'Last Name',
    styles: '',
    value: '',
    pattern: /^(?!\s*$).+/,
    errorMsg: 'Last name should not be empty',
    required:true
  },{
    id: 'email',
    type: 'email',
    label: 'Email',
    styles: '',
    value: '',
    pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    errorMsg: 'Enter a valid email address',
    required:true
  }, {
    id: 'password',
    type: 'password',
    label: 'Password',
    styles: '',
    value: '',
    pattern:/^(?!.* )(?=.*\d)(?=.*[a-zA-Z]).{6,}$/,
    errorMsg: 'Password must contain minimum 6 characters, one number, one alphabet and without spaces',
    required:true
  },{
    id: 'confirm_password',
    type: 'password',
    label: 'Confirm Password',
    styles: '',
    value: '',
    pattern:/^(?!.* )(?=.*\d)(?=.*[a-zA-Z]).{6,}$/,
    errorMsg: 'Password mismatch',
    required:true,
    condition: {
      key : 'password',
      type: 'match'
    }
  }]