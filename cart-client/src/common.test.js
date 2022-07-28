import { getCategories, totalCartAmount } from "./common";

const dummyData = [
    {
        name: "Beverages",
        key: "beverages"
    },
    {
        name: "Bakery Cakes and Dairy",
        key: "bakery-cakes-dairy"
    }
];

global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(dummyData) }));

describe("Categories tests", () => {
    test('test category = true', () => {
        return getCategories().then(data => {
            expect(data).toMatchObject([{ "name": "Beverages", "key": "beverages" }, { "name": "Bakery Cakes and Dairy", "key": "bakery-cakes-dairy" }]);
        });
    });

    test('test category = false', () => {
        return getCategories().then(data => {
            // expect.assertions(1);
            expect(data).toMatchObject([{ "name": "Beverages", "key": "beverages" }, { "name": "Bakery Cakes and Dairy", "key": "bakery-cakes-dairy111" }]);
        });
    });
});

describe("cart total tests", () => {
    test('test 1', () => {
        expect(totalCartAmount([{ item: 1, price: 100 }])).toBe(100);
    });

    test('test 2', () => {
        expect(totalCartAmount([{ item: 1, price: 100 }, { item: 2, price: 100 }])).toBe(100);
    });

    test('test 3', () => {
        expect(totalCartAmount([])).toBe(0);
    });
});