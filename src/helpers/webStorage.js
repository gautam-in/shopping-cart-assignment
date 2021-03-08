/* eslint-disable class-methods-use-this */
// Common class for interacting with web storage
export default class SessionStorageService {
  setItem(key, value, canSerialize = false) {
    let newValue = value;
    if (canSerialize) {
      newValue = JSON.stringify(value);
    }
    sessionStorage.setItem(key, newValue);
  }

  getItem(key, canDeserialize = false) {
    let value = sessionStorage.getItem(key);
    if (canDeserialize) {
      value = JSON.parse(value);
    }
    return value;
  }

  removeItem(key) {
    sessionStorage.removeItem(key);
  }

  hasItem(key) {
    return !!sessionStorage.getItem(key);
  }
}
