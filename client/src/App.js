import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import { persistor, store } from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor} >
          <Router>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/category/:categoryId' component={Products} />
            </Switch>
          </Router>
        </PersistGate>
        {/* <HomeScreen /> */}
      </Provider>

    </div>
  );
}

export default App;
