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
        var formFields = document.querySelectorAll(".form-group input");
        var errorMsg = '';
        var count = 1;
        var patternEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        formFields.forEach(function(item){
            if(item.value === "" || item.value === null){
                errorMsg = "Fields should not be empty!";
                count = 0;
            }else{
                if(item.type === 'email' && !item.value.match(patternEmail)){
                    errorMsg = "Invalid Email Address";
                    count = 0;
                }
            }
            var msgElement = item.offsetParent.querySelectorAll("p.error-message")[0];
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
})('.l-Form');

// Calling validate private method
login.validate('submit');