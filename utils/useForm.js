import { useState } from "react";
function isValidateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function isValidName(name) {
    const re = /^[A-Za-z]+$/;
    return re.test(name);
}
function hasNumber(password) {
    const re = /\d/;
    return re.test(password);
}
function hasAlphabet(password) {
    const re = /[a-zA-Z]/g;
    return re.test(password);
}


export default function useForm(initial = {}) {
    //create a state object for our inputs
    const [inputs, setInputs] = useState(initial);
    const [errors, setErrors] = useState(initial);

    function handleChange(e) {
        let { value, name, type } = e.target;
        if (type == "text") {
            if (!value) {
                setErrors({
                    ...errors,
                    [name]: `${name} cannot be empty`
                })
            }
            else if (!isValidName(value)) {
                setErrors({
                    ...errors,
                    [name]: `invalid ${name} `
                })
            }
            else if (isValidName(value)) {
                setErrors({
                    ...errors,
                    [name]: ''
                })
            }
        }
        else if (type == "email") {
            if (!value) {
                setErrors({
                    ...errors,
                    [name]: `${name} cannot be empty`
                })
            }
            else if (!isValidateEmail(value)) {
                setErrors({
                    ...errors,
                    [name]: `invalid ${name}`
                })
            }
            else if (isValidateEmail(value)) {
                setErrors({
                    ...errors,
                    [name]: ''
                })
            }
        }
        else if (type == "password") {
            if (value.length < 6) {
                setErrors({
                    ...errors,
                    [name]: `password should be atleast 6 digits long`
                })
            }
            else if (!hasNumber(value) && !hasAlphabet(value)) {
                setErrors({
                    ...errors,
                    [name]: `password should contain a number and alphabet`
                })
            }
            else if (!hasNumber(value) && hasAlphabet(value)) {
                setErrors({
                    ...errors,
                    [name]: `password should contain a number`
                })
            }
            else if (hasNumber(value) && !hasAlphabet(value)) {
                setErrors({
                    ...errors,
                    [name]: `password should contain an alphabet`
                })
            }
            else if (hasNumber(value) && hasAlphabet(value)) {
                setErrors({
                    ...errors,
                    [name]: ''
                })
            }
        }
        setInputs({
            // copy existing state
            ...inputs,
            [name]: value
        })
        console.log("state",inputs)
    }

    function clearForm() {
        const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, ""]));
        setInputs(blankState);
    }
    return {
        inputs,
        handleChange,
        clearForm,
        errors
    }

}