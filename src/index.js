import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ErrorBoundary } from "@components/ErrorBoundary";
import store from './store/store';
import { Provider } from 'react-redux';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <Provider store={store}>
                <App />
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>
);