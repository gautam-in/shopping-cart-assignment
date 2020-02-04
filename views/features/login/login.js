function checkPassword(textbox) {
	let rgularExp = {
        containsNumber : /\d+/,
        containsAlphabet : /[a-zA-Z]/,
    }
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
    return true;
}

