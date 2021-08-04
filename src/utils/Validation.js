import { useSelector } from "react-redux";

export const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    if (re.test(email)) {
        return true;
    }
    return false;
}

export const validatePassword = (password) => {
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/
    if (regex.test(password)){
        return true;
    }
    return false;
}

export const checkMissing = (form) => {
    for (let val in form) {
        if (!form[val]) {
            return false;
        }
    }
    return true;
}

export const displayCartItems = (data) => {
    let items = data.reduce((acc,value)=>{return acc + value.quantity},0)
    return items;
}