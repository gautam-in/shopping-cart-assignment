import React, { useContext, useState } from 'react';

const GlobalContext = React.createContext();

const [counter, setCounter] = useState(1);

const globalState = { counter, setCounter };

const ContextTest = () => {
    return (
        <GlobalContext.Provider value={globalState}>
            <React.Suspense fallback={<div>Loading...</div>}>
                <ChildComponent />
            </React.Suspense>
        </GlobalContext.Provider>
    )
}


const ChildComponent = () => {
    const context = useContext(GlobalContext);
    const LazyDisplayCounter = React.lazy(()=>DisplayCounter);

    return (
        <div>
            <button onClick={context.setCounter(1)}>Increment by 1</button>
        </div>
    )
}

const DisplayCounter = () => {
    const context = useContext(GlobalContext);

    return (
        <div>{context.counter}</div>
    )
}