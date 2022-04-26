import React, { useState } from "react";
import Decrement from "./decrement";
import Increment from "./increment";

const defaultContextValue = {
    counter: 0,
    setCounter: () => { }
};

export const GlobalContext = React.createContext(defaultContextValue);

const Main = () => {

    const [counter, setCounter] = useState(0);

    const state = {
        counter,
        setCounter
    }

    const DisplayCounter = React.lazy(() => import("./displayCounter"));

    return <GlobalContext.Provider value={state}>
        <React.Suspense fallback={<div>Loading...</div>}>
            <Decrement />
            <DisplayCounter />
            <Increment />
        </React.Suspense>
    </GlobalContext.Provider>
}

export default Main;