export const elements = {
  loader: document.querySelector('#loader'),
  landingPage: {
    mainContent: document.querySelector('#main-content'),
    carouselContent: document.querySelector('#carousel-content')
  },
  validators: {
    emailPattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    blankPattern: "",
    passwordCriteriaPattern: /(?=.{6,})((?=.*\d)(?=.*[a-z])(?=.*[A-Z])|(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_])|(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])).*/,
    spacePattern: /\s/
  }
};
