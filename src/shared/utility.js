export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const checkValidity = (rules, value) => {
    let isValid = true;
    if (!value) {
        return false;
    }

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.isPassword) {
        const pattern = /^.*(?=.{6,})(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]+$/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.isConfirmPassword) {
        isValid = rules.value === value;
    }

    return isValid;
}
