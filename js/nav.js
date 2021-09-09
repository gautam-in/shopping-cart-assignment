fetch('nav.html')
  .then(res => res.text())
  .then(text => {
    let oldelem = document.querySelector("script#navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem, oldelem);
    if(window.location.pathname == "/html/login.html"){
    document.getElementById("home").style.display = "none";
    document.getElementById("product").style.display = "none";
    document.getElementById("cart").style.display = "none";
    document.getElementById("logout").style.display = "none";
    } else {
      document.getElementById("signin").style.display = "none";
    document.getElementById("login").style.display = "none";
    }
    if (document.getElementById("login-container") && document.getElementById("signin-container")) {
      document.getElementById("login").onclick = function clickLogInButton() {
        document.getElementById("login-container").style.display = "block";
        document.getElementById("signin-container").style.display = "none";
      }
      document.getElementById("signin").onclick = function clickSignInButton() {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("signin-container").style.display = "block";
      }
    } else {
      
      document.getElementById("login").onclick = function clickLogInButton() {
        window.location.href = "../html/login.html";
      }
      document.getElementById("signin").onclick = function clickSignInButton() {
        window.location.href = "../html/login.html";
      }
      document.getElementById("logout").onclick = function clickLogInButton() {
        window.location.href = "../html/login.html";
      }
    }
    document.getElementById("cartCount").innerHTML = JSON.parse(localStorage.getItem("product")).length + ' ' + "item(s)"
  })
