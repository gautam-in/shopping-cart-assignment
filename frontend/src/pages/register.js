function registerUser(event){
    event.preventDefault();
    let validationCheck = true;
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email= document.getElementById('email').value
    let password= document.getElementById('password').value
    let confirmPassword = document.getElementById('confirm-password').value
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const passReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
    
    let firstNameDiv = document.getElementById('alert-first-name')
    firstNameDiv.style.display = "none";

    let lastNameDiv = document.getElementById('alert-last-name')
    lastNameDiv.style.display = "none";

    let emailDiv=document.getElementById('alert-email')
    emailDiv.style.display = "none";

    let passwordDiv = document.getElementById('alert-password')
    passwordDiv.style.display = "none";
    
    let confirmDiv = document.getElementById('alert-confirm')
    confirmDiv.style.display = "none";

    if(firstName == "" || firstName == undefined){
    firstNameDiv.style.display = "block";
    firstNameDiv.innerText = "Please Enter Your Name"
    validationCheck = false;
    }
    if(lastName == "" || lastName == undefined){
        lastNameDiv.style.display = "block";
        lastNameDiv.innerText = "Please Enter Your Last Name "
        validationCheck = false;
    }
        if(email == '' || reg.test(email) == false || email == undefined){
            emailDiv.style.display = "block";
            emailDiv.innerText = "Pleae Enter Valid Email Id"
            validationCheck = false;
        }
    if(password == "" || password == undefined || password.length < 6 || passReg.test(password)== false){
        passwordDiv.style.display = "block";
        passwordDiv.innerHTML = "Please Enter Valid Password"
        validationCheck = false;
    }
    if(confirmPassword == "" || confirmPassword != password || confirmPassword == undefined){
        confirmDiv.style.display = "block";
        confirmDiv.innerText = "Password doesn't match"
        validationCheck = false;
    }
    if(validationCheck == true){
        location.href = "login.html";
    }
    
}