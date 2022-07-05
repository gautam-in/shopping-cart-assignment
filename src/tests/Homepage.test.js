import { render, cleanup } from "@testing-library/react";
import Homepage from '../Views/HomePage';
import {BrowserRouter as Router} from 'react-router-dom';

afterEach(() => {
    cleanup(); 
})

test("renders Homepage", async () => {
    //render the component on virtual DOM correctly
    render(
        <Router>
            <Homepage/>
        </Router>
    )
})