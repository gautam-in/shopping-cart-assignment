
export const getLocalStorage = (key = "user") => {
    return localStorage.getItem(key);
  };

  export const removeLocalStorageItem = (key="user") => {
    localStorage.removeItem(key);
  }

export const isLoggedIn = () =>{
    return getLocalStorage()?true:false
}

export const logout = () => {
  removeLocalStorageItem();
}