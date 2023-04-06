import AllRoutes from 'src/components/AllRoutes/AllRoutes';
import { RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import { ItemContext } from './context/ItemContext';
import { useState } from 'react';
import { CategoryContext } from './context/CategoryContext';
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedcategory, setSelectedCategory] = useState();
  return (
    <>
      {/* <CategoryContext.Provider
        value={{ selectedcategory, setSelectedCategory }}
      > */}
      <ItemContext.Provider
        value={{
          cartItems,
          setCartItems,
          selectedcategory,
          setSelectedCategory,
        }}
      >
        <RouterProvider router={AllRoutes} />
      </ItemContext.Provider>
      {/* </CategoryContext.Provider> */}
    </>
  );
};

export default App;
