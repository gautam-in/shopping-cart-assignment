export const useLocalStorage = () => {
    let isLoggedIn;
    isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    return { isLoggedIn }
}