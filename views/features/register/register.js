let rgularExp = {
	containsNumber : /\d+/,
	containsAlphabet : /[a-zA-Z]/,
}
let password;

function checkRegPassword(textbox) {

	const val = textbox.value;
	let apha= rgularExp.containsNumber.test(val);
  	let num = rgularExp.containsAlphabet.test(val);
	
    if (val === '') {
        textbox.setCustomValidity('Required password');
    } else if(val.length <6 || !apha || !num ){
       textbox.setCustomValidity('The password length should be 6 characters and should have numbers and alphabets');
    } else {
        textbox.setCustomValidity('');
    }
    password = val;
    return true;
}
function confirmPassword(textbox) {

	const val = textbox.value;
	let apha= rgularExp.containsNumber.test(val);
  	let num = rgularExp.containsAlphabet.test(val);
	
    if (val === '') {
        textbox.setCustomValidity('Required password');
    } else if(val.length <6 || !apha || !num ){
       textbox.setCustomValidity('The password length should be 6 characters and should have numbers and alphabets');
    } else if(val !== password){
        textbox.setCustomValidity('Passsword and confirm password should be same');
    } else {
    	 textbox.setCustomValidity('');
    }
    return true;
}

