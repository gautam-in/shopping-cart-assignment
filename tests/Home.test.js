import RequestsHandler from '../lib/requestHandler';
import BACKEND_URL from '../config';

function fetchData(callback, url) {
  RequestsHandler.getData(url).then((res) => {
    callback(res);
  });
}
describe('Home Page Entry point', () => {
  test('total number of banners must be 5', () => {
    function callback(data) {
      expect(data).toBe(5);
    }
    fetchData(callback, `${BACKEND_URL}banners/`);
  });
  test('total number of Active banners must be 4', () => {
    function callback(data) {
      const filter = data.filter((banner) => banner.isActive);
      expect(filter).toBeGreaterThanOrEqual(5);
    }
    fetchData(callback, `${BACKEND_URL}banners/`);
  });
  test('Banner text must include deal', () => {
    function callback(data) {
      const banner = data[0];
      expect(banner).toMatch(/Deal/);
    }
    fetchData(callback, `${BACKEND_URL}banners/`);
  });

  // categories
  test('total number of Categories must be 5', () => {
    function callback(data) {
      expect(data).toBe(6);
    }
    fetchData(callback, `${BACKEND_URL}categories/`);
  });
});
