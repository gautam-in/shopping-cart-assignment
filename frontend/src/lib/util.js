export const formatNumber = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(number);
};

export const login = (userInput) => {
  let userData = localStorage && JSON.parse(localStorage.getItem('users'));
  let found = userData.find(
    (cred) =>
      userInput.email === cred.email && userInput.password === cred.password
  );
  //Returns user object if found, else returns undefined
  return found;
};

export const logout = () => {};
