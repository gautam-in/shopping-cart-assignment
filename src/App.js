import { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Alert from './components/Alert';
import './App.css';

const Home = lazy(() => import('./pages/home'));
const Products = lazy(() => import('./pages/products'));
const Login = lazy(() => import('./pages/login'));
const Register = lazy(() => import('./pages/register'));
const PageNotFound = lazy(() => import('./components/PageNotFound'));

class App extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<p>Loading..</p>}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/home' element={<Home />} />
              <Route path='/products' element={<Products />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </Suspense>

        <Alert />
      </>
    );
  };
};
export default App;