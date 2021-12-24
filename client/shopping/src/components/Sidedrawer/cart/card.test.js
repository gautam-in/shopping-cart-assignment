import { render, screen, fireEvent } from '@testing-library/react';
import Cart from './Cart';

const mockCallback = jest.fn();


const products= {
        "name":"Epigamia Greek Yogurt - Blueberry, 90 gm Cup",
        "imageURL": "/static/images/products/bakery-cakes-dairy/yogurt-blue.jpg",
        "price": 40,
        "qty": 2
}

describe("Check Cart Card", ()=>{
    test('check for name', () => {
        render(<Cart {...products}/>);
        const cardElement = screen.getByTestId("name")
        expect(cardElement).toHaveTextContent("Epigamia Greek Yogurt - Blueberry, 90 gm Cup");
      });
    test('check for price', () => {
        render(<Cart {...products}/>);
        const cardElement = screen.getByTestId("price")
        expect(cardElement).toHaveTextContent("X Rs 40");
      });
    test('check for total price', () => {
        render(<Cart {...products}/>);
        const cardElement = screen.getByTestId("totalprice")
        expect(cardElement).toHaveTextContent("Rs 80")
      });
    test('check for buttons', () => {
        render(<Cart {...products}/>);
        const cardElement = screen.getAllByRole("button")
        expect(cardElement.length).toBe(2)
      });
    test('check for Image', () => {
        render(<Cart {...products}/>);
        const cardElement = screen.getByRole("img")
        expect(cardElement.alt).toBe(products.name)
      });
})
