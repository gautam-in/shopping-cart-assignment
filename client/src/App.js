import MainLayout from './layout/mainLayout';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  const reduxStore = store();

  return (
    <div>
      <Provider store={reduxStore}>
          <BrowserRouter>
            <MainLayout />
          </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
