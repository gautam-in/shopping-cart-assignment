import { ADD_PRODUCT, DECREASE_QUANTITY, REMOVE_PRODUCT } from "../actions/types";
import cartReducer from "./cartReducer";

describe('cart reducer', () => {
    it('should handle ADD_PRODUCT and add new product into cart', () => {
        const product = {
            "name": "Fresho Kiwi - Green, 3 pcs",
            "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
            "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
            "price": 87,
            "stock": 50,
            "category": "5b6899953d1a866534f516e2",
            "sku": "fnw-kiwi-3",
            "id": "5b6c6a7f01a7c38429530883"
          };
        const newState = cartReducer([], {
            type: 'ADD_PRODUCT',
            payload: product
        });
        expect(newState).toEqual([{...product, quantity: 1, total: product.price}]);
    });
    it('should handle ADD_PRODUCT and update quantity of product into cart', () => {
        const product = {
            "name": "Apple - Washington, Regular, 4 pcs",
            "imageURL": "/static/images/products/fruit-n-veg/apple.jpg",
            "description": "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
            "price": 187,
            "stock": 50,
            "category": "5b6899953d1a866534f516e2",
            "sku": "fnw-apple-4",
            "id": "5b6c6aeb01a7c38429530884",
            "quantity": 1,
            "total": 187
          };
        const newState = cartReducer([product], {
            type: 'ADD_PRODUCT',
            payload: product
        });
        expect(newState).toEqual([{...product, quantity: 2, total: product.price * 2}]);
    });
    it('should handle REMOVE_PRODUCT', () => {
        const product = {
            "name": "Apple - Washington, Regular, 4 pcs",
            "imageURL": "/static/images/products/fruit-n-veg/apple.jpg",
            "description": "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
            "price": 187,
            "stock": 50,
            "category": "5b6899953d1a866534f516e2",
            "sku": "fnw-apple-4",
            "id": "5b6c6aeb01a7c38429530884",
            "quantity": 1,
            "total": 187
          };
        const productId = "5b6c6aeb01a7c38429530884";
        const newState = cartReducer([product], {
            type: 'REMOVE_PRODUCT',
            payload: productId
        });
        expect(newState).toEqual([]);
    });
    it('should handle DECREASE_QUANTITY', () => {
        const product = {
            "name": "Apple - Washington, Regular, 4 pcs",
            "imageURL": "/static/images/products/fruit-n-veg/apple.jpg",
            "description": "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
            "price": 187,
            "stock": 50,
            "category": "5b6899953d1a866534f516e2",
            "sku": "fnw-apple-4",
            "id": "5b6c6aeb01a7c38429530884",
            "quantity": 2,
            "total": 374
          };
        const newState = cartReducer([product], {
            type: 'DECREASE_QUANTITY',
            payload: product
        });
        expect(newState).toEqual([{
            "name": "Apple - Washington, Regular, 4 pcs",
            "imageURL": "/static/images/products/fruit-n-veg/apple.jpg",
            "description": "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
            "price": 187,
            "stock": 50,
            "category": "5b6899953d1a866534f516e2",
            "sku": "fnw-apple-4",
            "id": "5b6c6aeb01a7c38429530884",
            "quantity": 1,
            "total": 187
          }]);
    });
});