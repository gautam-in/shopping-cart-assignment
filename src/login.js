import "../styles/login.scss";

var form = document.querySelector('form');

form.addEventListener('submit', function () {
    const fData = new FormData(form)
    console.log(fData)
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if(email && password) login(email, password)
  return false;
});

const login = async(email, password)=>{
    const url = "http://localhost:3200/user/login";
    const payload = {email, password}
    const responseJson = await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    });
    const userData = await responseJson.json();
    if(userData && userData.userData && userData.userData.email){
        window.location.href="home.html";
    }else{
        alert("Invalid credentials, Please try latter...")
    }
}