import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';
import SignIn from '../Views/SignInUser';
import {BrowserRouter as Router} from 'react-router-dom';

afterEach(() => {
    cleanup(); 
})

describe("SignIn Component" ,() => {
    test("renders SignIn", async () => {
        //render the component on virtual DOM correctly
        render(
            <Router>
                <SignIn/>
            </Router>
        )
    })

})


