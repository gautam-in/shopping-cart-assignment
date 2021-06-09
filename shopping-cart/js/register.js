function registerUser(event){
    event.preventDefault();
    var validationCheck = true;
    var firstName = $('#first-name').val()
    var lastName = $('#last-name').val()
    var email= $('#email').val()
    var password= $('#password').val()
    var confirmPassword = $('#confirm-password').val()
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    document.getElementById('first-name-alert').style.display = "none";
    document.getElementById('last-name-alert').style.display = "none";
    document.getElementById('email-alert').style.display = "none";
    document.getElementById('password-alert').style.display = "none";
    document.getElementById('confirm-password-alert').style.display = "none";
    if(firstName == "" || firstName == undefined){
    document.getElementById('first-name-alert').style.display = "block";
    validationCheck = false;
    }
    if(lastName == "" || lastName == undefined){
        document.getElementById('last-name-alert').style.display = "block";
        validationCheck = false;
    }
        if(email == '' || reg.test(email) == false || email == undefined){
            document.getElementById('email-alert').style.display = "block";
            validationCheck = false;
        }
    if(password == "" || password == undefined){
        document.getElementById('password-alert').style.display = "block";
        validationCheck = false;
    }
    if(confirmPassword == "" || confirmPassword != password || confirmPassword == undefined){
        document.getElementById('confirm-password-alert').style.display = "block";
        validationCheck = false;
    }
    if(validationCheck == true){
        location.href = "login.html";
    }
    
}