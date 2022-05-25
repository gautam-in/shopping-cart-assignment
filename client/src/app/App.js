import './App.css';
import Home from '../pages/home'
import Products from '../pages/products'
import SignIn from'../pages/signIn'
import SignUp from '../pages/signUp'
import Notfound from '../pages/notfound'
import { useEffect } from 'react';
import { fetchCategories } from './appSlice'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../components/header';
import { BrowserRouter as Router,Routes, Route ,useLocation} from "react-router-dom";
import {ROUTES} from '../utils/constants'
import Footer from '../components/footer';
function App() {
  const dispatch = useDispatch()
  const categoriesList = useSelector(state => state.appReducer.categoriesList);
 

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  return (
    <>
      <Router>
          
          <Routes>
              <Route path={ROUTES.home} element={<Header/>} >
                  <Route index element={<Home />} />
                  <Route exact path={ROUTES.products} element={<Products category={categoriesList}/>}/>
                  <Route exact path={`${ROUTES.products}/:categoryId`} element={<Products category={categoriesList} />}></Route>
                  <Route exact path={ROUTES.signin} element={<SignIn/>}></Route>
                  <Route exact path={ROUTES.signup} element={<SignUp/>}></Route>
                  <Route path="*" component={Notfound}/>
              </Route>
          </Routes> 
              <Footer/>
      </Router>
    </>
  );
}

export default App;
