

export const requestDispatch = (type) => {
        return type + 'Request'
}

/* check empty object */
export const isEmpty = (obj) => {
        for (const key in obj) {
                if (obj.hasOwnProperty(key)) return false;
        }
        return true;
}


/*
* check field is valid or not
* */
export function setValidationFlag(name, value, validationRule, validator) {
        if (validator.message(name, value, validationRule) && Object.keys(validator.message(name, value, validationRule)).length > 0) {
                return true
        } else {
                return false
        }
};