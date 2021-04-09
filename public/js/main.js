// Banner Carousel
$(document).ready(function () {
  $('.bxslider').bxSlider({
    mode: 'fade',
    auto: 'true'
  });
});

// Login & register
function validateLogin() {
  var form = document.getElementById('login-form');
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  if (email == "sabka@gmail.com" && password == "sabkabazar") {
    document.getElementById("error-msg").innerHTML = "Welcome back!";
    alert('Welcome back!');
    return true;
  } else {
    document.getElementById("error-msg").innerHTML = "Email and password are incorrect.";
    document.getElementById("error-msg").setAttribute(
      "style", "background-color: #fce4e4;width:100%; font-size: 12px; border: 1px solid #fcc2c3; float: left;padding: 20px 30px;");
    return false;
  }
  // window.location.reload();
}

function validateRegister() {
  let fname = document.getElementById("firstname").value;
  let lname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let cpassword = document.getElementById("conf-password").value;
  let letterNumber = /^[0-9a-zA-Z]+$/;
  let emailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (fname == '' || lname == '' || email == '' || password == '' || cpassword == '') {
    document.getElementById("error-msg-register").innerHTML = "Please fill all the fields";
    document.getElementById("error-msg-register").setAttribute("style", "background-color: #fce4e4;width:100%; font-size: 12px; border: 1px solid #fcc2c3; float: left;padding: 20px 30px;");
  } else if (!email.match(emailCheck)) {
    document.getElementById("error-msg-register").innerHTML = "Enter valid Email Id";
    document.getElementById("error-msg-register").setAttribute("style", "background-color: #fce4e4;width:100%; font-size: 12px; border: 1px solid #fcc2c3; float: left;padding: 20px 30px;");
  } else if (password.length < 6) {
    document.getElementById("error-msg-register").innerHTML = "Password must be greater or equal to 6";
    document.getElementById("error-msg-register").setAttribute("style", "background-color: #fce4e4;width:100%; font-size: 12px; border: 1px solid #fcc2c3; float: left;padding: 20px 30px;");
  } else if (!password.match(letterNumber)) {
    document.getElementById("error-msg-register").innerHTML = "Password must only have numbers and letters";
    document.getElementById("error-msg-register").setAttribute("style", "background-color: #fce4e4;width:100%; font-size: 12px; border: 1px solid #fcc2c3; float: left;padding: 20px 30px;");
  } else if (password != cpassword) {
    document.getElementById("error-msg-register").innerHTML = "Your passwords don't match. Try again.";
    document.getElementById("error-msg-register").setAttribute("style", "background-color: #fce4e4;width:100%; font-size: 12px; border: 1px solid #fcc2c3; float: left;padding: 20px 30px;");
  } else {
    let registerObj = {
      name: fname,
      lname: lname,
      email: email,
      pwd: password,
      cnpwd: cpassword
    };
    signup(registerObj);
  }
}

function signup(registerObj) {
  let uname = registerObj.name;
  alert("Hello" + " " + uname + " " + "Welcome to Sabka Bazar");
  window.location.href = "/";
}

// Cart Functionality
let buyProduct = function () {
  return {
    addProduct: function (prodid) {
      //addtocart
      let xmlReq = new XMLHttpRequest();
      xmlReq.open("GET", "/cart/addtocart/" + prodid, true);
      xmlReq.onload = function () {
        if (xmlReq.status >= 200 && xmlReq.status < 400) {
          let data = JSON.parse(xmlReq.responseText);
          console.log(data);
          window.location.href = "/cart";
        } else {
          console.log("We connected to the server, but it returned an error.");
        }
      };
      xmlReq.onerror = function () {
        console.log("Connection Error");
      };
      xmlReq.send();
    },
    changeProductCount: function (prodid, task, input_id) {
      //plus-and-minus
      let xmlReq = new XMLHttpRequest();
      xmlReq.open("GET", "/cart/changecartcount/" + prodid + "/" + task, true);
      xmlReq.onload = function () {
        if (xmlReq.status >= 200 && xmlReq.status < 400) {
          let data = JSON.parse(xmlReq.responseText);
          console.log(data);
          data.element.forEach(element => {
            if (element.id == prodid) {
              document.getElementById("prod_count" + input_id).value = element.count;
              document.getElementById("prod_price" + input_id).innerHTML = 'Rs.' + element.price;
              document.getElementById("prod_totalprice" + input_id).innerHTML = 'Rs.' + element.totalprice;
            }
          });
          document.getElementById("prod_totcount").innerHTML = data.totalCounter;
          document.getElementById("prod_checkoutprice").innerHTML = 'Rs.' + data.checkoutAmount + ' >';
          document.getElementById("cart_counter").innerHTML = data.totalCounter + ' item';
          document.getElementById("cart_counter_mobile").innerHTML = data.totalCounter;
        } else {
          console.log("We connected to the server, but it returned an error.");
        }
      };
      xmlReq.onerror = function () {
        console.log("Connection Error");
      };
      xmlReq.send();
    }
  };
}();