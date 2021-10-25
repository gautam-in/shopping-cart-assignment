import { useEffect, useState } from "react";

export default function useForm(initalState = {}) {
    const [input, setInputs] =useState(initalState);
    const initialValues = Object.values(initalState).join("");

    useEffect(()=>{
        setInputs(initalState);
    },[initialValues]);

    function handleChange(e){
        let { name, value, type } = e.target;
        if (type === 'number') {
            value = parseInt(value);
          }
        setInputs(initialValues);
    }

    return {handleChange, input}
}