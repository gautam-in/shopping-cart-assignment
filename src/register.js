import "./styles/style.scss";

const form = document.getElementById("register-form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const parent = element.parentElement;
  const parents = parent.parentElement;
  parents.classList.add("errorMsg");
  const errorDisplay = parents.querySelector("p");
  errorDisplay.textContent = message;
};
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const setSuccess = (element) => {
  const parent = element.parentElement;
  const parents = parent.parentElement;
  if (parents.classList.contains("errorMsg")) {
    parents.classList.remove("errorMsg");
  }
};
const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  if (firstNameValue === "") {
    setError(firstName, "FirstName is required");
  } else {
    setSuccess(firstName);
  }
  if (lastNameValue === "") {
    setError(lastName, "LastName is required");
  } else {
    setSuccess(lastName);
  }
  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }
  if (
    user_records.some((v) => {
      return v.email == emailValue;
    })
  ) {
    setError(email, "Email address aleady exist");
  } else {
    user_records.push({
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
      password: passwordValue,
    });
    localStorage.setItem("users", JSON.stringify(user_records));
    window.location.href = "index.html";
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }

  if (confirmPasswordValue === "") {
    setError(confirmPassword, "Please confirm your password");
  } else if (confirmPasswordValue !== passwordValue) {
    setError(confirmPassword, "Passwords doesn't match");
  } else {
    setSuccess(confirmPassword);
  }
};
