import {
  Box,
} from "@mui/material";
import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { theme } from "./config/theme";
import Home from "./route/home";
import Product from "./route/product";
import Register from "./route/Register";
import SingIn from "./route/singIn";
import Header from "./route/header";
import { getBanner } from './store/action/action'
import { useAppSelector, useAppDispatch } from './store/hook'
import { Dispatch } from 'redux'
import Loading from "./component/Loading/Loading";
import {StoreStateProps} from './type'
function App() {
  const state = useAppSelector((state: StoreStateProps) => state.user)
  const { loading, category, banner } = state;
  const dispatch: Dispatch<any> = useAppDispatch()

  useEffect(() => {
    if (!banner || banner.length === 0) {
      dispatch(getBanner());
    }
  }, [banner, dispatch])

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {loading ? <Loading />
         :
          (<Router>
            <Header>
              <div className='content'>
                <Box  sx={{ minHeight: "80vh" }} >
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <Home bannersImage={banner} category={category} />
                      }
                    />
                    <Route
                      path="/home"
                      element={
                        <Home bannersImage={banner} category={category} />
                      }
                    />
                    <Route
                      path="/products"
                      element={<Product />}
                    />
                    <Route path="/register" element={<Register />} />
                    <Route path="/signin" element={<SingIn />} />
                  </Routes>
                </Box>
              </div>
            </Header>
          </Router>)
          }
      </div>
    </ThemeProvider>
  );
}


export default App;
