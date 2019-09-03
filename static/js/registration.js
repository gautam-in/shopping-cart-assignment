/**
 * Create immediately invoked function expression (IIFE)
 */

const registration = (function(formSelector) {
    
    //Create private variable
    var formSelector = formSelector;
    var form = document.querySelectorAll(formSelector)[0];
    var formInput = document.querySelectorAll(".form-group input");

    //Private Method to validate input field having value or not.If input filed having value then lable move on top
    var checkForContent = (e) => {
        if(e.target.value !== "" && e.target.value !== null){
            e.target.classList.add("has-text");
        } else {
            e.target.classList.remove("has-text");
        }
    };
    
    //Private method to register listener to submit the form 
    var validate = (eventType) => {
        form.addEventListener(eventType, e => validateForm(e));
    }
    
    // Private method to validate the input filed
    var validateForm = (e) => {
        e.preventDefault();  
        var patternPasssword = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;
        var patternEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var errorMsg = '';
        var count = 1;
        formInput.forEach(function(item){
            if(item.value === "" || item.value === null){
                errorMsg = "Fields should not be empty!";
                count = 0;
            }else{
                if(item.type === 'password' && ((item.value).length < 6 || !item.value.match(patternPasssword))){
                    errorMsg = "Password Field should be number and alphabet and minimum lenght 6!";
                    count = 0;
                }
                if(item.id === 'confirmPassword' && (item.value).localeCompare(document.getElementById("password").value)){
                    errorMsg = "Mismatch password!";
                    count = 0;
                }
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
})(".fl-form");

// Calling inti method
registration.init();
