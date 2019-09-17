/**
* Create immediately invoked function expression (IIFE)
*/
var login = (function(formSelector) {

    //create private variable
    var formSelector = formSelector;
   
    /**
     * Create private method to validate the input filed
     * @param  {Object} e Refrenece of html elements
     */
    var validateForm = (e) => {
        e.preventDefault();  
        var formFields = document.querySelectorAll(CONSTANS.FORM_INPUT_FIELD);
        var errorMsg = '';
        var count = 1;
        formFields.forEach(function(item){
            if(item.value === "" || item.value){
                errorMsg = CONSTANS.EMPTY_ERROR_MSG;
                count = 0;
            }else{
                if(item.type === 'email' && !item.value.match(CONSTANS.EMAIL_VALIDATION)){
                    errorMsg = CONSTANS.EMAIL_ERROR_MSG;
                    count = 0;
                }
            }
            var msgElement = item.offsetParent.querySelectorAll(CONSTANS.FORM_ERROR_CLASS)[0];
            msgElement.innerText = errorMsg;
            errorMsg = '';
        });
        if(count){
            e.target.submit();
        }
    }
    
    return {
        //validate method to register listener to submit the form after form validation
        validate: function(eventType) {
            document.querySelectorAll(formSelector)[0].addEventListener(eventType, (e) => validateForm(e));
        }
    }
})(CONSTANS.FORM);

// Calling validate private method
login.validate('submit');