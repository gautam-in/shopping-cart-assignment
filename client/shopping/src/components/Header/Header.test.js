import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from"./Header"
const cartProducts = {"Fresho Kiwi - Green, 3 pcs":{
    "imageURL": "/static/images/products/fruit-n-veg/kiwi-green.jpg",
    "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
    "price": 87,
    "qty": 1
  },
  "Apple - Washington, Regular, 4 pcs":{
    "imageURL": "/static/images/products/fruit-n-veg/apple.jpg",
    "description": "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
    "price": 187,
    "qty": 1
  }}
  let MockComponent = (props)=>{
      return <BrowserRouter>
            <Header cartProducts = {props.cart}/>
      </BrowserRouter>
  }
describe("Header Test", ()=>{
    test('check for Home link', () => {
        render(<MockComponent cart={cartProducts}/>);
        const HomeElement = screen.getByRole('link', { name: 'Home' });
        expect(HomeElement).toBeInTheDocument();
      });
    test('check for Product link', () => {
        render(<MockComponent cart={cartProducts}/>);
        const ProductsElement = screen.getByRole('link', { name: 'Products' });
        expect(ProductsElement).toBeInTheDocument();
      });
    test('check for SignIn link', () => {
        render(<MockComponent cart={cartProducts}/>);
        const SignInElement = screen.getByRole('link', { name: 'Signin' });
        expect(SignInElement).toBeInTheDocument();
      });
    test('check for Register link', () => {
        render(<MockComponent cart={cartProducts}/>);
        const RegisterElement = screen.getByRole('link', { name: 'Register' });
        expect(RegisterElement).toBeInTheDocument();
      });
    test('check for Cart Value', () => {
        render(<MockComponent cart={cartProducts}/>);
        const RegisterElement = screen.getByTestId("items")
        expect(RegisterElement).toHaveTextContent("2 Items");
      });
})
