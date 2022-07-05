import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';
import Cart from '../Views/MiniCart';
import {BrowserRouter as Router} from 'react-router-dom';

afterEach(() => {
    cleanup(); 
})

describe("Cart Component" ,() => {
    test("renders Cart", async () => {
        //render the component on virtual DOM correctly
        render(
            <Router>
                <Cart/>
            </Router>
        )
    })

})


