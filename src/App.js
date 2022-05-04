import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import ProductsList from './routes/products-list/products-list.component';
import SignIn from './routes/auth/signin.component';
import Register from './routes/auth/register.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='products/*' element={<ProductsList />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='register' element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
