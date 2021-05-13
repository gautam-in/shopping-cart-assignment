const getCookies = (name) => {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) {
    return parts.pop().split(";").shift();
  } else {
    return null;
  }
};

const isCookieExists = (name) => {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  return parts.length == 2;
};

const getCookieValue = (a) => {
  var b = document.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
};

const setCookie = (cname, cvalue, exdays) => {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

const getCookie = (cname) => {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

const checkCookie = (cname) => {
  var cookieName = getCookie(cname);
  if (cookieName != "") {
    return true;
  }
  return false;
  // else {
  //     user = prompt("Please enter your name:", "");
  //     if (user != "" && user != null) {
  //         setCookie(cname, user, 30);
  //     }
  // }
};

export {
  getCookie,
  isCookieExists,
  getCookieValue,
  setCookie,
  getCookies,
  checkCookie,
};
