import reducer,{ productAddToCart, incrementProductItemQuantity, decrementProductItemQuantity } from '../../redux/productCartsSlice';
import { store,setupStore } from '../../redux/store';
import axios from 'axios';

describe("products reducer", () => {



    test("should return the initial state when passed an empty action", async () => {

        const postSpy = jest.spyOn(axios, 'post').mockResolvedValueOnce({
            data: {
                "response": "Pending",
                "responseMessage": "Product added to cart successfully"
            }
        });
        await store.dispatch(productAddToCart({
            "name": "Fresho Kiwi - Green, 3 pcs",
            "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
            "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
            "price": 87,
            "stock": 50,
            "category": "5b6899953d1a866534f516e2",
            "sku": "fnw-kiwi-3",
            "id": "5b6c6a7f01a7c38429530883"
        }));
        expect(postSpy).toBeCalledWith('http://localhost:5000/addToCart');
    });


    test("should return the initial state when passed an empty action", async () => {

        const postSpy = jest.spyOn(axios, 'post').mockResolvedValueOnce({
            data: {
                "response": "Success",
                "responseMessage": "Product added to cart successfully"
            }
        });
        await store.dispatch(productAddToCart({
            "name": "Fresho Kiwi - Green, 3 pcs",
            "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
            "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
            "price": 87,
            "stock": 50,
            "category": "5b6899953d1a866534f516e2",
            "sku": "fnw-kiwi-3",
            "id": "5b6c6a7f01a7c38429530883"
        }));
        expect(postSpy).toBeCalledWith('http://localhost:5000/addToCart');
    });

    test("should return the initial state when passed an empty action", async () => {

        const postSpy = jest.spyOn(axios, 'post').mockResolvedValueOnce({
            data: {
                "response": "Success",
                "responseMessage": "Product added to cart successfully"
            }
        });
        await setupStore({
            productCategory: {
                id: '5b675e5e5936635728f9fc30',
                name: 'Beverages'
              },
              productCarts: [
                {
                  "name": "Fresho Kiwi - Green, 3 pcs",
                  "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
                  "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
                  "price": 87,
                  "stock": 50,
                  "category": "5b6899953d1a866534f516e2",
                  "sku": "fnw-kiwi-3",
                  "id": "5b6c6a7f01a7c38429530883"
                }]
        }).dispatch(productAddToCart({
            "name": "Fresho Kiwi - Green, 3 pcs",
            "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
            "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
            "price": 87,
            "stock": 50,
            "category": "5b6899953d1a866534f516e2",
            "sku": "fnw-kiwi-3",
            "id": "5b6c6a7f01a7c38429530883"
        }));
        expect(postSpy).toBeCalledWith('http://localhost:5000/addToCart');
    });


    test('test incrementProductItemQuantity', () => {
        const previousState = [
            {
                "name": "Fresho Kiwi - Green, 3 pcs",
                "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
                "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
                "price": 87,
                "stock": 50,
                "category": "5b6899953d1a866534f516e2",
                "sku": "fnw-kiwi-3",
                "id": "5b6c6a7f01a7c38429530883",
                "quantity":1
            }
        ]

        expect(reducer(previousState, incrementProductItemQuantity(            {
            "name": "Fresho Kiwi - Green, 3 pcs",
            "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
            "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
            "price": 87,
            "stock": 50,
            "category": "5b6899953d1a866534f516e2",
            "sku": "fnw-kiwi-3",
            "id": "5b6c6a7f01a7c38429530883"}))).toEqual([
                {
                    "name": "Fresho Kiwi - Green, 3 pcs",
                    "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
                    "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
                    "price": 87,
                    "stock": 50,
                    "category": "5b6899953d1a866534f516e2",
                    "sku": "fnw-kiwi-3",
                    "id": "5b6c6a7f01a7c38429530883",
                    "quantity":2
                }
        ])
    })

    test('test decrementProductItemQuantity', () => {
        const previousState = [
            {
                "name": "Fresho Kiwi - Green, 3 pcs",
                "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
                "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
                "price": 87,
                "stock": 50,
                "category": "5b6899953d1a866534f516e2",
                "sku": "fnw-kiwi-3",
                "id": "5b6c6a7f01a7c38429530883",
                "quantity":2
            }
        ]

        expect(reducer(previousState, decrementProductItemQuantity(            {
            "name": "Fresho Kiwi - Green, 3 pcs",
            "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
            "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
            "price": 87,
            "stock": 50,
            "category": "5b6899953d1a866534f516e2",
            "sku": "fnw-kiwi-3",
            "id": "5b6c6a7f01a7c38429530883"}))).toEqual([
                {
                    "name": "Fresho Kiwi - Green, 3 pcs",
                    "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
                    "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
                    "price": 87,
                    "stock": 50,
                    "category": "5b6899953d1a866534f516e2",
                    "sku": "fnw-kiwi-3",
                    "id": "5b6c6a7f01a7c38429530883",
                    "quantity":1
                }
        ])

        expect(reducer(previousState, decrementProductItemQuantity(            {
            "name": "Fresho Kiwi - Green, 3 pcs",
            "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
            "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
            "price": 87,
            "stock": 50,
            "category": "5b6899953d1a866534f516e2",
            "sku": "fnw-kiwi-3",
            "id": "5b6c6a7f01a7c38429530883",
            "quantity":1
        }))).toEqual([
        ])
    })
})