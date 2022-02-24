const checkCart = require('../model/checkCart');


test('cart functionality test', () => {
    expect(checkCart("5b6c6a7f01a7c38429530883")).toBe(false);
});
