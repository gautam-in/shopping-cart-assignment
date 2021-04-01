export const checkLoggedIn = () => {
  return (
    (window.localStorage.getItem("isLoggedIn") &&
      JSON.parse(window.localStorage.getItem("isLoggedIn"))) ||
    false
  );
};
