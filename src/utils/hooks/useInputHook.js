import { useState } from "react";

export const useInputChange = (defaultValues) => {
    const [input, setInput] = useState({ ...defaultValues });

    const handleInputChange = (event) => {
        console.log(event);
        event.stopPropagation?.();
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        });
    };

    const setDefaults = () => {
        setInput({ ...defaultValues });
    };

    const clearValues = () => {
        setInput({});
    };

    console.log(input);
    return [input, handleInputChange, clearValues, setDefaults];
};