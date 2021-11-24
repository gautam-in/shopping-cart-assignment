function validate(e){
    e.preventDefault();
    const password = document.getElementsByName("passwordInput")[0].value;
    const confirmPassword = document.getElementsByName("confirmPasswordInput")[0].value;
    if(password === confirmPassword){
        document.forms[0].submit();
    } else {
        alert("Please enter a valid password");
    }
}