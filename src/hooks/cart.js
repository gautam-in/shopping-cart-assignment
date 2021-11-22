import { useContext, createContext, useState } from "react";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [selectedProductItems, setSelectedProductItems] = useState([]);

  function updateItemCount(value) {
    setCartItemCount(value);
  }

  function getItemCount() {
    return cartItemCount;
  }

  function updateSelectedProductList(obj) {
    if (!selectedProductItems.length)
      setSelectedProductItems([
        ...selectedProductItems,
        { ...obj, quantity: 1 },
      ]);
    else {
      const temp = selectedProductItems.filter((item) => item.id === obj.id);
      if (temp.length > 0) {
        const tempArr = selectedProductItems.map((item) => {
          if (item.id === obj.id) {
            item.quantity += 1;
          }
          return item;
        });
        setSelectedProductItems(tempArr);
      } else {
        setSelectedProductItems([
          ...selectedProductItems,
          { ...obj, quantity: 1 },
        ]);
      }
    }
  }

  function getSelectedProductItems() {
    return selectedProductItems;
  }

  function handleProductIncrement(data) {
    const tempArr = selectedProductItems.map((item) => {
      if (item.id === data.id) {
        item.quantity += 1;
      }
      return item;
    });
    setSelectedProductItems(tempArr);
  }

  function handleProductDecrement(data) {
    let tempArr = selectedProductItems.map((item) => {
      if (item.id === data.id) {
        if (item.quantity > 0) item.quantity -= 1;
      }
      return item;
    });
    tempArr = tempArr.filter((item) => item.quantity > 0);
    setSelectedProductItems(tempArr);
  }

  return (
    <LocalStateProvider
      value={{
        cartItemCount,
        getItemCount,
        setCartItemCount,
        updateItemCount,
        selectedProductItems,
        setSelectedProductItems,
        updateSelectedProductList,
        getSelectedProductItems,
        handleProductIncrement,
        handleProductDecrement,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

function useCart() {
  const all = useContext(LocalStateContext);
  return all;
}

export { useCart, CartStateProvider };
