const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default class Validator {
  // eslint-disable-next-line class-methods-use-this
  validateEmail(value) {
    if (!value.match(mailformat)) {
      return false;
    }
    return true;
  }

  // eslint-disable-next-line class-methods-use-this
  validatePassword(value) {
    let alphabetFound = false;
    let numberFound = false;
    let spaceFound = false;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < value.length; i++) {
      if (value.charCodeAt(i) >= 48 && value.charCodeAt(i) <= 57) {
        numberFound = true;
      } else if ((value.charCodeAt(i) >= 65 && value.charCodeAt(i) <= 90)
                || (value.charCodeAt(i) >= 97 && value.charCodeAt(i) <= 122)) {
        alphabetFound = true;
      } else if (value.charCodeAt(i) === 32) {
        spaceFound = true;
      }
    }
    return value.length >= 6 && alphabetFound && numberFound && !spaceFound;
  }
}

// exports.Validator = Validator;
