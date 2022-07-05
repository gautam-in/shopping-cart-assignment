import { render, cleanup } from "@testing-library/react";
import ProductListing from '../Views/ProductListing';
import {BrowserRouter as Router} from 'react-router-dom';

afterEach(() => {
    cleanup(); 
})

test("renders ProductList", async () => {
    //render the component on virtual DOM correctly
    render(
        <Router>
            <ProductListing/>
        </Router>
    )
})