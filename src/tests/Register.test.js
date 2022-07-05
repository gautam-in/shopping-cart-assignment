import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';
import Register from '../Views/Register';
import {BrowserRouter as Router} from 'react-router-dom';

afterEach(() => {
    cleanup(); 
})

describe("Register Component" ,() => {
    test("renders Register", async () => {
        //render the component on virtual DOM correctly
        render(
            <Router>
                <Register/>
            </Router>
        )
    })

})


