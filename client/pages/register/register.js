function setError(error) {
  let errorBlock = document.getElementById("error-block");
  errorBlock.innerText = error;
  errorBlock.style.display = "block";
}

function register(event) {
  event.preventDefault();

  //   creating inputs array and then reducing the array to an object
  let inputs = document.getElementsByTagName("input");
  let data = Array.from(inputs).reduce(
    (acc, cur) => ({ ...acc, [cur.name]: cur.value }),
    {}
  );
  let { password, confirmPassword } = data;
  if (password.search(/[a-z]/i) < 0) {
    setError("Password should contain at least one letter");
    return;
  } else if (password.search(/[0-9]/) < 0) {
    setError("Password should contain at least one digit");
    return;
  }
  if (password !== confirmPassword) {
    setError("Password and Confirm Password should match");
    return;
  }

  //   Good Path All Good!!
  let errorBlock = document.getElementById("error-block");
  errorBlock.style.display = "none";
  localStorage.setItem("IsAuth", true);
  // TODO: redirect to home page
}
