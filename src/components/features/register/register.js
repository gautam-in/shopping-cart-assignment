import './../../../utils/styles/global.scss';
import './../../../styles/common/header.scss';
import './../../../styles/common/footer.scss';   
import './../login/login.scss';
var inputFields = document.querySelectorAll('input');
inputFields.forEach((el,index,array)=>{
	el.addEventListener('blur',function(e){
		this.classList.add('touched');
		validations.call(this,e);
	})
	el.addEventListener('keyup',function(e){
		if(el.classList.contains('touched')){
			validations.call(this,e);
		}
		return false;
	})
});
function validations(e){
	var name = this.name;
	var placeholder = this.placeholder;
	if(!emptyCheck(e,placeholder)){
		switch(name){
			case 'fname':
					textValidation(name, e, placeholder);
					break;
			case 'lname':
					textValidation(name, e, placeholder);
					break;
			case 'email':
					validateEmail(name,e,placeholder);
					break;
			case 'psw':
					validatePassword(name,e,placeholder);
					break;
			case 'conpsw':
					confirmPassword(name,e,placeholder);
					break;		 
			default:
			console.log('ok');				
		}
	}
}
function emptyCheck(event, placeholder){
	if(!event.target.value){
		event.target.nextElementSibling.innerHTML = 'Please enter your ' + placeholder;
		return false;
	}
}
function textValidation(name, event, placeholder){
	if((event.target.value).length<2){
		event.target.nextElementSibling.innerHTML ='The field ' + placeholder +' has invalid characters';
		return false;
	}
	event.target.nextElementSibling.innerHTML ='';
	return true;
}
function validateEmail(name,event,placeholder){
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
function validatePassword(name, event, placeholder){
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
function confirmPassword(name, event, placeholder){
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