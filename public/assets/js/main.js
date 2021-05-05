// Banner Carousel
$(document).ready(function () {
  $('.bxslider').bxSlider({
    mode: 'fade',
    auto: 'true'
  });
});

// Login & register
function validateLogin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (email == "sabka@gmail.com" && password == "sabkabazar") {
    alert('Welcome back!');
    return true;
  } else {
    alert("Email and password are incorrect.");
  }
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
    alert("Please fill all the fields");
  } else if (!email.match(emailCheck)) {
    alert("Enter valid Email Id");
  } else if (password.length < 6) {
    alert("Password must be greater or equal to 6");
  } else if (!password.match(letterNumber)) {
    alert("Password must only have numbers and letters");
  } else if (password != cpassword) {
    alert("Your passwords don't match. Try again.");
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
let buyProduct = (function () {
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
        }
        else {
          console.log("We connected to the server, but it returned an error.");
        }
      }
      xmlReq.onerror = function () {
        console.log("Connection Error");
      }
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
          (data.element).forEach(element => {
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
        }
        else {
          console.log("We connected to the server, but it returned an error.");
        }
      }
      xmlReq.onerror = function () {
        console.log("Connection Error");
      }
      xmlReq.send();
    }
  };
})();  