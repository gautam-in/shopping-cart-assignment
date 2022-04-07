import React, { useContext } from "react";
import { GlobalContext } from ".";

const Increment = () => {

    const {counter, setCounter} = useContext(GlobalContext);

    return (
        <div>
            <button onClick={()=>setCounter(counter+1)}>Increment</button>
        </div>
    )
}

export default Increment;