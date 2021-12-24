import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Cards from"./Cards"
const Products =
    {
      "name": "Fresho Kiwi - Green, 3 pcs",
      "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
      "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
      "price": 87,
      "stock": 50,
      "category": "5b6899953d1a866534f516e2",
      "sku": "fnw-kiwi-3",
      "id": "5b6c6a7f01a7c38429530883"
    }

describe("Product Card Test", ()=>{
    test('check for Buy now Buttons', () => {
        render(<Cards/>);
        const ButtonElement = screen.getAllByRole('button');
        expect(ButtonElement.length).toBe(2)
      });
      test('check for image', () => {
        render(<Cards {...Products}/>);
        const ImageElement = screen.getByRole("img")
        expect(ImageElement.alt).toContain(Products.name);
      });
      test('check for name', () => {
        render(<Cards {...Products}/>);
        const NameElement = screen.getByTestId("cardname")
        expect(NameElement).toHaveTextContent(Products.name);
      });
      test('check for desciption', () => {
        render(<Cards {...Products}/>);
        const DescriptionElement = screen.getByTestId("carddes")
        expect(DescriptionElement).toHaveTextContent(Products.description);
      });
})
