/**
 * Create immediately invoked function expression (IIFE)
 */
var registration = (function(formSelector) {
    
    //Create private variable
    var formSelector = formSelector;
    var form = document.querySelectorAll(formSelector)[0];
    var formInput = document.querySelectorAll(CONSTANS.FORM_INPUT_FIELD);

    /**
     * private Method to validate input field having value or not.If input filed having value then lable move on top
     * @param  {object} e Refrence of HTML element 
     */
    var checkForContent = (e) => {
        if(e.target.value !== "" && e.target.value !== null){
            e.target.classList.add("has-text");
        } else {
            e.target.classList.remove("has-text");
        }
    };
    
    /**
     * private method to register listener to submit the form 
     * @param  {string} eventType Event name
     */
    var validate = (eventType) => {
        form.addEventListener(eventType, e => validateForm(e));
    }
    
    /**
     * private method to validate the input filed 
     * @param  {object} e reference of context
     */
    var validateForm = (e) => {
        e.preventDefault();
        var errorMsg = '';
        var count = 1;
        formInput.forEach(function(item){
            if(item.value === "" || !item.value){
                errorMsg = CONSTANS.EMPTY_ERROR_MSG;
                count = 0;
            }else{
                console.log(item.value, (item.value).length);
                if(item.type === 'password' && ((item.value).length < 6 || !item.value.match(CONSTANS.PASSWORD_VALIDATION))){
                    errorMsg = CONSTANS.PASSWORD_ERROR_MSG;
                    count = 0;
                }
                if(item.id === 'confirmPassword' && (item.value).localeCompare(document.getElementById("password").value)){
                    errorMsg = CONSTANS.PASSWORD_MISSMATCH;
                    count = 0;
                }
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
    };
    
    // create public method to register listener to input fields 
    return{
        init: function() {
            formInput.forEach(function(item){
                item.addEventListener("blur", (e) => checkForContent(e));
            });
            validate('submit');
        }
    }
})(CONSTANS.FORM);

// Calling inti method
registration.init();
