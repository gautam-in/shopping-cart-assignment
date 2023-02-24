import { useState } from "react";

export const useLocalStorage = (key) => {
    const [storedValue, setStoredValue] = useState(() => {
        console.log("localstotrage", localStorage.getItem(key))
        if (localStorage.getItem(key) !== 'undefined' && localStorage.getItem(key) !== null) {
            console.log("localstotrage key not null", localStorage.getItem(key));
            return JSON.parse(localStorage.getItem(key))
        }
        else if (key === 'userDetails')
            return JSON.parse(`{}`)
        else {
            console.log("localstotrage cart", localStorage.getItem(key));
            return JSON.parse(`[]`)
        }

    });

    const setValue = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
    }
    return [storedValue, setValue];
}