let formSubmission = document.querySelector('.signup-form-input-fields');
formSubmission.addEventListener('submit', fetchFormData);

window.addEventListener('DOMContentLoaded', cartBtnValueDisplay);

function fetchFormData(event){
    event.preventDefault();  

    let emailInput = formSubmission.elements[2].value;
    let passwordInput = formSubmission.elements[3].value;
    let confirmPasswordInput = formSubmission.elements[4].value;

    if(checkEmailData(emailInput) && (checkPassword(passwordInput) && checkConfirmPassword(passwordInput, confirmPasswordInput))){
        console.log("true");
    }
    else{
        console.log("false");
    }

}

function checkEmailData(emailData){
    return emailData.includes('@');
}

function checkPassword(passwordData){
    let correctPattern = /^((?!.*[\s])(?=.*[A-Z])(?=.*\d).{6,15})/;
    if(passwordData.match(correctPattern)){
        return true;
    }
    else{
        let pwdInputError = document.querySelector('.passwordError');
        pwdInputError.classList.add('signup-error');
        pwdInputError.textContent = "Password must contain 6 characters, must have a number and alphabet and cannot have spaces";
        return false;
    }
}

function checkConfirmPassword(passwordData, confirmPasswordData){
    if(passwordData === confirmPasswordData){
        return true;
    }
    else{
        let cnfPwdError = document.querySelector('.confirmPasswordError');
        cnfPwdError.classList.add('signup-error');
        cnfPwdError.textContent = "Passwords don't match";
        return false;
    };
}

function cartBtnValueDisplay(){
    let cartBtn = document.querySelector('.login-cart-btn');
    cartBtnValue = localStorage.length ===0 ? "0 item": localStorage.length +  " items";
    cartBtn.innerHTML = `<i class="fas fa-shopping-cart"></i> ${cartBtnValue}`;
}