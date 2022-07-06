import { BrowserRouter } from 'react-router-dom';
import Navigation from './navigation';
import { render, screen, fireEvent } from '@testing-library/react';
import { store } from '../../store/store';
import { Provider } from 'react-redux';

describe('Navigation test', () => {
    test('Navigation link test', () => {
        const { container } = render(<Provider store={store}><BrowserRouter><Navigation /></BrowserRouter></Provider>);
        const navLink = screen.getByTestId("home");
        expect(screen.getByTestId("home")).toHaveTextContent(/Home/);
        expect(screen.getByTestId("products")).toHaveTextContent(/Products/);
        fireEvent.click(navLink)
        expect(container.getElementsByClassName('active').length).toBe(1);
    });
})



