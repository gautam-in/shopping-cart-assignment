import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RequestsHandler from '../lib/requestHandler';
import BACKEND_URL from '../config';
import Products from '../components/Products';
import { AppStateProvider } from '../lib/store';

configure({ adapter: new Adapter() });
function fetchData(callback, url) {
  RequestsHandler.getData(url).then((res) => {
    callback(res);
  });
}
describe('Products Entry point', function () {
  it('Products should load', function () {
    shallow(
      <AppStateProvider>
        <Products />
      </AppStateProvider>
    );
  });
  it('filter state should initiliaze with undefined', () => {
    const app = shallow(
      <AppStateProvider>
        <Products />
      </AppStateProvider>
    );
    expect(app.prop('filter')).toEqual(undefined);
  });
  test('products must be fetchable', () => {
    function callback(data) {
      expect(data).toBeGreaterThanOrEqual(1);
    }
    fetchData(callback, `${BACKEND_URL}products/`);
  });
});
