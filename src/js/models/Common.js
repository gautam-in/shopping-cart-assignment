import {
  elements
} from '../views/base';

export const validateEmail = (inputString) => {
  let emailPattern = new RegExp(elements.validators.emailPattern);
  if(emailPattern.test(inputString)){
    return true;
  }else {
      return false;
    }
};

export const validateBlank = (inputString) => {
  if(inputString != elements.validators.blankPattern){
    return true;
  }else {
      return false;
    }
};

export const passwordCriteria = (inputString) => {
  let passwordPattern = new RegExp(elements.validators.passwordCriteriaPattern);
  if(passwordPattern.test(inputString)){
    return true;
  }else {
      return false;
    }
};

export const spaceCheck = (inputString) => {
  let spacePattern = new RegExp(elements.validators.spacePattern);
  if(spacePattern.test(inputString)){
    return true;
  }else {
      return false;
    }
};

export const persistData = () => {
  localStorage.setItem('likes', JSON.stringify(this.likes));
};

// export const readStorage = () {
//   // const storage = JSON.parse(localStorage.getItem('likes'));
//   //
//   // // Restoring likes from the localStorage
//   // if (storage) this.likes = storage;
// };
