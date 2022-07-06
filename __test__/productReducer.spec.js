import { productReducer } from "../src/context/productReducer.js"

// testing cart data
test("should test the reducer for default", () => {
    const initialState = {cartData: {product: "oil", quantity: 1}}
    const action = {
        type: "NOT_AN_ACTION",
        payload: {
            product: "oil",
            quantity: 1
        }
    }
    const newState = productReducer(initialState, action)
    const expectedState = {cartData: {product: "oil", quantity: 1}}
    expect(newState).toEqual(expectedState)

})
describe("testing cart data in product reducer", () => {
    test("should add the item to cart on add to cart", () => {
        const initialState = {cartData: {}}
        const action = {
            type: "ADD_TO_CART",
            payload: {
                product: "oil",
                quantity: 1
            }
        }
        const newState = productReducer(initialState, action)
        const expectedState = {cartData: {product: "oil", quantity: 1}}
        expect(newState).toEqual(expectedState)
    })
    test("should increase the quantity on increment click", () => {
        const initialState = {cartData: {product: "oil", quantity: 1}}
        const action = {
            type: "INCREMENT_CART_QTY",
            payload: {
                product: "oil",
                quantity: 2
            }
        }
        const newState = productReducer(initialState, action)
        const expectedState = {cartData: {product: "oil", quantity: 2}}
        expect(newState).toEqual(expectedState)
    })
    test("should decrease the quantity on decrement click", () => {
        const initialState = {cartData: {product: "oil", quantity: 2}}
        const action = {
            type: "DECREMENT_CART_QTY",
            payload: {
                product: "oil",
                quantity: 1
            }
        }
        const newState = productReducer(initialState, action)
        const expectedState = {cartData: {product: "oil", quantity: 1}}
        expect(newState).toEqual(expectedState)
    })
    test("should delete the item on decrement click at quantity one", () => {
        const initialState = {cartData: {product: "oil", quantity: 1}}
        const action = {
            type: "DECREMENT_CART_QTY",
            payload: {}
        }
        const newState = productReducer(initialState, action)
        const expectedState = {cartData: {}}
        expect(newState).toEqual(expectedState)
    })
})

//testing product data
describe("test products data in product reducer", () => {
    test("should load products data on load" , () => {
        const initialState = { productsData: [], serverData: [] }
        const action = {
            type: "GET_PRODUCTS_DATA",
            payload: [
                {
                    product:"coconut oil",
                    price: "180"
                }
            ]
        }
        const newState = productReducer(initialState, action)
        const expectedState = {productsData: [{ product:"coconut oil",price: "180"}], serverData: [{ product:"coconut oil",price: "180"}]}
        expect(newState).toEqual(expectedState)
    })
    test("should change products data on category change" , () => {
        const initialState = {productsData: [{ product:"coconut oil",price: "180"}], serverData: [{ product:"coconut oil",price: "180"}, { product:"shampoo",price: "140" }]}
        const action = {
            type: "SET_PRODUCTS_DATA",
            payload: [
                {
                    product:"shampoo",
                    price: "140"
                }
            ]
        }
        const newState = productReducer(initialState, action)
        const expectedState = {productsData: [{ product:"shampoo",price: "140" }], serverData: [{ product:"coconut oil",price: "180"}, { product:"shampoo",price: "140"}]}
        expect(newState).toEqual(expectedState)
    })
})
//testing category data
describe("test category data in product reducer", () => {
    test("should load category data on load", () => {
        const initialState = {categoryData: []}
        const action = {
            type: "SET_CATEGORY_DATA",
            payload : [{ product:"shampoo",price: "140" }]
        }
        const newState = productReducer(initialState, action)
        const expectedState = {categoryData: [{ product:"shampoo",price: "140" }]}
        expect(newState).toEqual(expectedState)
    })
    test("should change the category value", () => {
        const initialState = {categoryValue: ""}
        const action = {
            type: "SET_CATEGORY_VALUE",
            payload : "beverages"
        }
        const newState = productReducer(initialState, action)
        const expectedState = {categoryValue: "beverages"}
        expect(newState).toEqual(expectedState)
    })
})
//testing cart view
describe("test cart view in product reducer", () => {
    test("should change the cart view value", () => {
        const initialState = {closeCartModel: true}
        const action = {
            type: "SET_CART_VIEW",
            payload: false
        }
        const newState = productReducer(initialState, action)
        const expectedState = {closeCartModel: false}
        expect(newState).toEqual(expectedState)
    })
})