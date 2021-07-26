import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../components/Page';

it('renders withour crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Page />, div);
});
