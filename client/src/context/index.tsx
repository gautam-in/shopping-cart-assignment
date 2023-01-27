import React, { createContext, useContext, useEffect, useState } from "react";

const initialState = {
  selectedCategory: ""
}
const Context = createContext<any>(initialState);

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user_in")
    if (user) {
      setIsAuth(true)
    }
  }, [])

  return (
    <Context.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        isAuth,
        setIsAuth,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useMarket = () => useContext(Context)