import React, { useContext } from "react";
import { GlobalContext } from ".";

const Decrement = () => {

    const {counter, setCounter} = useContext(GlobalContext);

    return (
        <div>
            <button onClick={()=>setCounter(counter-1)}>Decrement</button>
        </div>
    )
}

export default Decrement;