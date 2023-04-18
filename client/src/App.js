import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import { GlobalProvider } from './provider/GlobalProvider';
import axios from 'axios';
import { API_BASE_URL } from './utils/constants';
import { QueryClient, QueryClientProvider } from 'react-query'

const Home = React.lazy(() => import('./container/Pages/Home'))
const Products = React.lazy(() => import('./container/Pages/Products'))
const Login = React.lazy(() => import('./container/Pages/Login'))
const Register = React.lazy(() => import('./container/Pages/Register'))
axios.defaults.baseURL = API_BASE_URL

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalProvider>
        <Layout>
          <Suspense fallback={null}>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/products' element={<Products />}></Route>
                <Route path='/products/:categoryId' element={<Products />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
              </Routes >
            </BrowserRouter>
          </Suspense>
        </Layout>
      </GlobalProvider>
    </QueryClientProvider>
  );
}

export default App;
