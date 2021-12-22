export function showToastMessage(message, isError = false) {
  let toastDiv = document.createElement("div");
  toastDiv.id = "snackbar";
  toastDiv.textContent = message;
  toastDiv.className = isError ? "show errorToast" : "show";
  document.body.appendChild(toastDiv);
  setTimeout(function () {
    toastDiv.className = "";
  }, 3000);
}
