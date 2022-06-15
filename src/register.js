import "../styles/register.scss"


var form = document.querySelector('form');

form.addEventListener('submit', function () {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    if(password !== confirmPassword){
        alert("Password and confirm password should be same.")
    }else if(firstName && lastName && email && password) {
        const payload = {firstName, lastName, email, password}
        registerUser(payload);
    }else{
        alert("All fields are required.")
    }
  return false;
});

const registerUser = async(payload)=>{
    const url = "http://localhost:3200/user/register";
    const responseJson = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    });
    const userData = await responseJson.json();
    if(userData && userData.userData && userData.userData.email){
        alert("You have registered successfully.");
        document.getElementById('firstName').value="";
        document.getElementById('lastName').value="";
        document.getElementById('email').value="";
        document.getElementById('password').value="";
        document.getElementById('confirmPassword').value="";
    }else{
        alert("some things went wrong, Please try latter...")
    }
}