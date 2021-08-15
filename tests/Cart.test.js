import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Cart from '../components/Cart';

import { AppStateProvider } from '../lib/store';

configure({ adapter: new Adapter() });

describe('Cart Entry point', function () {
  it('Cart should load', function () {
    shallow(
      <AppStateProvider>
        <Cart />
      </AppStateProvider>
    );
  });
});
