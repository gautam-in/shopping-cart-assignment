class Login{
checkValidation = ((formSelector)=> {
    var validateForm = (e) => {
        e.preventDefault();  
        var formFields = document.querySelectorAll(CONSTANTS.FORM_INPUT_FIELD);
        var errorMsg = '';
        var flag = true;
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
            var msgElement = item.offsetParent.querySelectorAll(CONSTANTS.FORM_ERROR_CLASS)[0];
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
