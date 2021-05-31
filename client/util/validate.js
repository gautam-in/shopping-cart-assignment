export const validate = ({ firstName, lastName, email, password, cnfPassword }) => {

    const error = {};
    let isValid = true;
    if (firstName.trim().length < 6) {
        isValid = false;
        error.firstName = 'Length should be atleast 6'
    }
    if (lastName.trim().length < 6) {
        isValid = false;
        error.lastName = 'Length should be atleast 6'
    }
    if (password.trim().length < 6) {
        isValid = false;
        error.password = 'Length should be atleast 6'
    }
    if (cnfPassword.trim() !== password) {
        isValid = false;
        error.cnfPassword = 'Confirm password is not same'
    }

    return { isValid, error };
}