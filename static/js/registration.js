/**
 * Floating Label
 * Check for input value, if available then sticks the label on top of the input
 */
function FloatingLabel(formSelector){
    // create a object for DOM elements
    const DOMElements = {
        form: document.querySelectorAll(formSelector)[0],
        formInput : document.querySelectorAll(".form-group input")
    }
    function checkForContent (e){
        if(e.target.value !== "" && e.target.value !== null){
            e.target.classList.add("has-text");
        } else {
            e.target.classList.remove("has-text");
        }
    }
    this.init = function(){
        //var formFields = document.querySelectorAll(".form-group input");
        DOMElements.formInput.forEach(function(item){
            item.addEventListener("blur", checkForContent);
        });
        return this;
    };

    this.validateForm = function(e){
        e.preventDefault();  
        //var formFields = document.querySelectorAll(".form-group input");
        var patternPasssword = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;
        var patternEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var errorMsg = '';
        var count = 1;
        DOMElements.formInput.forEach(function(item){
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
    }

    this.validate = function(eventType){
        DOMElements.form.addEventListener(eventType, this.validateForm );
    };
}
// Create object
var formValidation = new FloatingLabel(".fl-form");
formValidation.init().validate('submit');
