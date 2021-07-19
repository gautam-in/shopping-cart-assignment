export function validateEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

export function validatePassword(pwd) {
  const number = /[0-9]/;
  const letter = /[a-zA-Z]/;
  return number.test(pwd) && letter.test(pwd) && pwd.length > 6;
}

export function validateEmailAndPassword(email, pwd) {
  const emailCorrect = validateEmail(email);
  const passwordCorrect = validatePassword(pwd);
  if (emailCorrect && passwordCorrect) {
    return null;
  }
  const message = {};
  if (!emailCorrect) {
    message.email = 'Email is incorrect';
  }
  if (!passwordCorrect) {
    message.password = `Password is incorrect, make sure you've entered atleast 1 number , 1 alphabet & length is greater than 6`;
  }
  return message;
}

export function validateRegisterFields(email, pwd) {}
