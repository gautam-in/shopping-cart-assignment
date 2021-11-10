import React, { createContext, useState } from 'react';
export const AuthContext = createContext('');

const AuthContextProvider = ({children}) => {

  let [loggedIn, setLoggedIn] = useState(false);
      
  return ( 
    <AuthContext.Provider value={{loggedIn,setLoggedIn}} >
      { children }
    </AuthContext.Provider>
  );
};
 
export default AuthContextProvider;