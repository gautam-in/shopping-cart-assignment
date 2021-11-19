import { useState } from "react";

export default function userForm(initialState) {
    let [inputs, setInputs] = useState(initialState)

    const onHandleChange = (e) => {
        let { name, value } = e.target;
        setInputs({ ...inputs , [name] : value })
    }

    return { 
        inputs,
        onHandleChange
    }
}

