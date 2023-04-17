export async function apiCalls(apiArr){
    let temp=await Promise.all(
        apiArr.map((promise)=>promise.catch((err)=>{return null}))
    );
    return temp;
}
export function serverFetchCall(api){
    return fetch(api).then((res)=>res.json());
}
export function validateRegiterForm(values){
    let errors = {};

  if (!values.firstName) {
    errors.firstName = "First Name required";
  }
  if (!values.lastName) {
    errors.lastName = "Last Name required";
  }

  
  const emailRegex = RegExp(/\S+@\S+\.\S+/);

  if (!values.email) {
    errors.email = "Email required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password required";
  } else  {
    let passCheck=checkPwd(values.password);
    if(passCheck!=="ok")
    errors.password = passCheck;
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Password required";
  }else if(values.confirmPassword!==values.password){
    errors.confirmPassword = "Confirm Password should be same";
  } else  {
    let passCheck=checkPwd(values.password);
    if(passCheck!=="ok")
    errors.confirmPassword = passCheck;
  }

  return errors;
}
export function validateSignInForm(values){
    let errors={};
    const emailRegex = RegExp(/\S+@\S+\.\S+/);

  if (!values.email) {
    errors.email = "Email required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password required";
  } else  {
    let passCheck=checkPwd(values.password);
    if(passCheck!=="ok")
    errors.password = passCheck;
  }
  return errors;
}
function checkPwd(str) {
    if (str.length < 6) {
        return("Password must be at least 6 characters");
    }  else if (str.search(/\d/) == -1) {
        return("Password must contain a number");
    } else if (str.search(/[a-zA-Z]/) == -1) {
        return("Password must contain a alphabet");
    } else if(/\s/g.test(str)){
        return("Password should not contain space");
    }
    return("ok");
}