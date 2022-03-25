import React from 'react';
import styled from 'styled-components';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { Header } from "./components/Header";
import { Categories } from "./containers/Categories";
import { Products } from "./containers/Products";
import { Register } from "./containers/Register";
import { SignIn } from "./containers/Signin";
import { openRoutes, protectedRoutes } from './routes';

// CSS dependencies
import 'react-toastify/dist/ReactToastify.css';

const Footer = styled.footer`
  padding: 8px 10px;
  text-align: center;
  font-size: var(--fs-12);
  color: var(--color-mine-shaft);
  background-color: var(--color-gallery);
`;

const App = () => (
  <>
    <Header />

    <Routes>
      <Route path={openRoutes.root} element={<Categories />}></Route>
      <Route path={protectedRoutes.products} element={<Products />}></Route>
      <Route path={protectedRoutes.register} element={<Register />}></Route>
      <Route path={protectedRoutes.signIn} element={<SignIn />}></Route>
    </Routes>

    <Footer>Copyright 2011-2018 Sabka Bazaar Grocery Supplies Pvt. Ltd.</Footer>
  </>
);

export default App;
