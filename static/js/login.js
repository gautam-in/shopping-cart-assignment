class Login{
checkValidation = ((formSelector)=> {
    const validateForm = (e) => {
        e.preventDefault();  
        let formFields = document.querySelectorAll(CONSTANTS.FORM_INPUT_FIELD);
        let errorMsg = '';
        let flag = true;
        formFields.forEach(function(item){
            if(item.value === "" || !item.value){
                errorMsg = CONSTANTS.EMPTY_ERROR_MSG;
                flag = false;
            }else{
                if(item.type === 'email' && !item.value.match(CONSTANTS.EMAIL_VALIDATION)){
                    errorMsg = CONSTANTS.EMAIL_ERROR_MSG;
                    flag = false;
                }
                if(item.type === 'password' && ((item.value).length < 5 || !item.value.match(CONSTANTS.PASSWORD_VALIDATION))){
                    errorMsg = CONSTANTS.PASSWORD_ERROR_MSG;
                    flag = false;
                }
            }
            let msgElement = item.offsetParent.querySelectorAll(CONSTANTS.FORM_ERROR_CLASS)[0];
            msgElement.innerText = errorMsg;
            errorMsg = '';
        });
        if(flag){
            e.target.submit();
        }
    }
    
    return {
        // form validation check
        validate(eventType) {
            document.querySelectorAll(formSelector)[0].addEventListener(eventType, (e) => validateForm(e));
        }
    }
})('.form');

}
let login = new Login();
login.checkValidation.validate('submit');
