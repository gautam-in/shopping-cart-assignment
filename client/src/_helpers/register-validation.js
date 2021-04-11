export const formFieldValidations = (formData) => {
    let errors = {};
    let isValid = true;

    if (!formData.user["firstName"]) {
        isValid = false;
        errors["firstName"] = "Please enter First Name.";
    }

    if (!formData.user["lastName"]) {
        isValid = false;
        errors["lastName"] = "Please enter Last Name.";
    }

    if (typeof formData.user["email"] !== "undefined") {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(formData.user["email"])) {
            isValid = false;
            errors["email"] = "Please enter valid email address.";
        }
    }

    if (!formData.user["password"]) {
        isValid = false;
        errors["password"] = "Please enter password.";
    }

    if (typeof formData.user["password"] !== "undefined") {
        var pattern = new RegExp(/^(?=.*[a-z])(?=.*[0-9])(?=.{7,})(\S+$)/i);
        if (!pattern.test(formData.user["password"])) {
            isValid = false;
            errors["password"] = `Please enter valid password with these format.
             Minimum length 7 characters 
             Must have a number and alphabet 
             Cannot have spaces`;
        }
    }
    if (!formData.user["confirmPassword"]) {
        isValid = false;
        errors["confirmPassword"] = "Please enter confirm password.";
    }
    if (typeof formData.user["password"] !== "undefined" && typeof formData.user["confirmPassword"] !== "undefined") {
        if (formData.user["password"] != formData.user["confirmPassword"]) {
            isValid = false;
            errors["confirmPassword"] = "Passwords don't match.";
        }
    }

    return {
        isValid,
        errors
    }
}