import { render } from '@testing-library/react';
import React from "react";
import App from './App';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

test('renders the landing page', async () => {
    await act( async () => render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    ));
});