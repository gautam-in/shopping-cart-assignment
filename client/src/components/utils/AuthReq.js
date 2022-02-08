const API_URL = "http://localhost:8080/auth/";
class AuthReq{
  
  login(email, password) {
    return fetch(API_URL + "login", {
      method: "POST",
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      // body: JSON.stringify({email:email, password: password}),
      body: `email=${email}&password=${password}`,
      mode: "cors"
    })
    .then(response => {
      response.json();})
    .then(data =>{
      // console.log("success:" , data);

      localStorage.setItem("user", JSON.stringify(data));
      return data;
    })
  }
  
  register(email, password, cpassword) {
    return fetch(API_URL + "register", {
      method: "POST",
      headers:{ 
        'Content-Type': 'application/x-www-form-urlencoded'
      },

      // body: JSON.stringify({email:email, password: password}),
      body: `email=${email}&password=${password}&cpassword=${cpassword}`,
      mode: "cors"
    }).then(response => {
      response.json();}).then(data => {
        return data;
      })
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthReq();