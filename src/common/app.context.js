
import React, { createContext, useState } from "react";

import { useEffect } from 'react'
import { auth, db } from '../config/firebase'

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((user)=> {
          if (user) {
              console.log(user)
              setUser(user.email)
        //     db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
        //       console.log(snapshot)
        //       setUser(snapshot?.data()?.email)
        //   }) 
          } else {
            setUser(null);
          }
        })
    }, [setUser])

    return (
        <AppContext.Provider value={{user, setUser}}>
            {children}
        </AppContext.Provider>
    )
}