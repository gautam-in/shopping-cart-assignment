const createElementHelper = (type, classList, innerText, innerHTML) => {
  const customElement = document.createElement(type);
  if (classList) customElement.classList = classList;
  if (innerText) customElement.innerText = innerText;
  if (innerHTML) customElement.innerHTML = innerHTML;

  return customElement;
};
