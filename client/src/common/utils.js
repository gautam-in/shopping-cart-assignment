const PHONE_NUMBER_LENGTH = 10;

export function getUrlParameter(name) {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
  const { location } = window;
  const results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export const getExtension = (path) => {
  const fullFileName = path.substring(path.lastIndexOf('/') + 1);
  return fullFileName.substring(fullFileName.lastIndexOf('.') + 1).toLowerCase();
};

export const isEmailValid = (email) => {
  const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
  return emailPattern.test(email);
};

export const isUsernameValid = (username) => username.length >= USERNAME_MIN_LENGTH;

export const isPhoneValid = (phone) => phone.length === PHONE_NUMBER_LENGTH;
