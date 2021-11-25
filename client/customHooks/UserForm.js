import { useState } from "react";

export default function userForm(initialState) {
    let [inputs, setInputs] = useState(initialState)

    const onHandleChange = (e) => {
        let { name, value } = e.target;
        setInputs({ ...inputs , [name] : value })
    }

    const clearInputs = () => {
        const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, '']))
        setInputs(blankState);
    }
 
    return { 
        inputs,
        onHandleChange,
        clearInputs
    }
}

