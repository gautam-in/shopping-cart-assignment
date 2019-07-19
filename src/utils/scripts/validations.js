var validations = (function(){
	var emptyCheck = function(event, placeholder){
		if(!event.target.value){
			event.target.nextElementSibling.innerHTML = 'Please enter your ' + placeholder;
			return false;
		}
		return true;
	};
	var textValidation = function(name, event, placeholder){
		if((event.target.value).length<2){
			event.target.nextElementSibling.innerHTML ='The field ' + placeholder +' has invalid characters';
			return false;
		}
		event.target.nextElementSibling.innerHTML ='';
		return true;
	};
	var validateEmail =	function(name,event,placeholder){
		if(event.target.value){
			var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	        if (reg.test(event.target.value) == false) 
	        {
	            event.target.nextElementSibling.innerHTML = 'The ' +placeholder+' entered is invalid';
	            return false;
	        }
		}
		event.target.nextElementSibling.innerHTML ='';
		return true;
	}
	var validatePassword = function(name, event, placeholder){
		if(event.target.value){
			var reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
	        if (reg.test(event.target.value) == false) 
	        {
	            event.target.nextElementSibling.innerHTML = 'The ' +placeholder+' entered is invalid';
	            return false;
	        }
		}
		event.target.nextElementSibling.innerHTML ='';
		return true;
	}
	var confirmPassword = function(name, event, placeholder){
		if(event.target.value){
			var password = document.getElementsByName("psw")[0].value;
	        if (event.target.value!== password) 
	        {
	            event.target.nextElementSibling.innerHTML = 'The ' +placeholder+' entered is invalid';
	            return false;
	        }
		}
		event.target.nextElementSibling.innerHTML ='';
		return true;
	}
	return {
		emptyCheck:emptyCheck,
		textValidation:textValidation,
		validateEmail:validateEmail,
		validatePassword:validatePassword,
		confirmPassword:confirmPassword
	}
}());

export default validations;