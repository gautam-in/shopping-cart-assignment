import { Products } from "../index-components"
import { render, screen } from '@testing-library/react';
import { ProductsContext } from '../../context/productContext';
import "@testing-library/jest-dom";
import { BrowserRouter } from 'react-router-dom';
import  userEvent  from '@testing-library/user-event';
describe("test product component", () => {
    test("should have filter, products components", () => {
        const productState = {productsData: [{category: "5b6899683d1a866534f516e0",
        description: "These Wipes have aloe vera as key ingredient which makes it the best choice for baby hygiene, make-up remover, sanitizing your face and hand after a long drive, sports or any other situation where you need a quick hygiene solution.",
        id: "5b6c761801a7c3842953089b",
        imageURL: "images/products/baby/red-wipes.jpg",
        name: "Baby Wipes - Cherry Blossom, 2x80 pcs",
        price: 300,
        sku: "baby-wipes-red-80",
        stock: 50}],
        categoryData: [{description: "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
        enabled: true,
        id: "5b675e5e5936635728f9fc30",
        imageUrl: "images/category/beverages.webp",
        imageUrlSmall: "images/category/beverages_small.webp",
        key: "beverages",
        name: "Beverages",
        order: 3}],
        cartData:[],
    }
       render(<BrowserRouter><ProductsContext.Provider value = {{ productState}}><Products /></ProductsContext.Provider></BrowserRouter>)
       expect(screen.getByTestId("filter")).toBeInTheDocument()
       expect(screen.getByTestId("single-product")).toBeInTheDocument()
    })
    
})