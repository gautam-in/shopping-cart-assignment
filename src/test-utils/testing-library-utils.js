import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { createMemoryHistory } from "history";
import { Router } from "react-router";
import thunk from "redux-thunk";

const render = (
  ui,
  { preloadedState = {}, routeHistory, initialRouteIndex, ...renderOptions }
) => {
  const AllTheProviders = ({ children }) => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    const history = createMemoryHistory({
      initialEntries: routeHistory,
      initialIndex: initialRouteIndex,
    });
    return (
      <Provider store={store}>
        <Router history={history}>{children}</Router>
      </Provider>
    );
  };

  return rtlRender(ui, { wrapper: AllTheProviders, ...renderOptions });
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
