
import { extractTotalPrice } from './Cart';
describe("should return the sum of the cart values", () => {
    test("test cart values", () => {
        const cartArray = [{price: 100, quantity: 1}, {price: 200, quantity: 2}]
        const cartValue  = extractTotalPrice(cartArray)
        expect(cartValue).toBe(500)
    })
})