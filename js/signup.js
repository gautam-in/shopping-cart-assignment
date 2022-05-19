//for signup-signin page
function applytransformOrigin() {
    document.getElementById("fname").style.transformOrigin = "88px 26px";
  }

  //for signup page
  function pwdChecking(p,cp) {
      //do optimization here!! tooo big code is 

      if(p.length < 6)
          return false; //length check
      else if(p.length != cp.length)
          return false; // mismatch
      else {
          //check for space
          let pattern = /\s/g;
          let result = p.match(pattern);
          if(result != null) 
              return false; //space in pwd

          //check for 1 number and 1 alphabet atleast
          pattern = "^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$";
          if(p.match(pattern)){ 
              return true;
          } else
              return false;
      }
  }

  //signup page form submission
  function validateData(e){ 
      e.preventDefault();
      let inputCollection = document.querySelectorAll("input");
      let l = inputCollection.length;

      let pwdCheck = pwdChecking(inputCollection[l-2].value,inputCollection[l-1].value);
      if(!pwdCheck) {
          alert("Password criterias not met, please check");
          return;
      }

      //sanitise all data
      let postData = [];
      for (let index = 0; index < inputCollection.length; index++) {
          const value = inputCollection[index].value;
          postData.push(DOMPurify.sanitize(value));
      }
      alert("signup successfull");
  }

  //sign in data
  function validateSignInData(e){ 
      e.preventDefault();
      let inputCollection = document.querySelectorAll("input");
      let l = inputCollection.length;
      
      //sanitise all data
      let postData = [];
      for (let index = 0; index < inputCollection.length; index++) {
          const value = inputCollection[index].value;
          postData.push(DOMPurify.sanitize(value));
      }      
  }

