import React, { useContext } from "react";
import { GlobalContext } from ".";

const DisplayCounter = () => {

    const {counter} = useContext(GlobalContext);

    return (
        <div>
            <h1>{counter}</h1>
        </div>
    )
}

export default DisplayCounter;