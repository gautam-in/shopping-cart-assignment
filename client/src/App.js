import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import store from './store'
import Routes from './routes'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
