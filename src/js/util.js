async function fetchItemsByUrl(url) {
  const response = await fetch(url);
  let data = null;
  if (response.ok) {
    data = await response.json();
  }
  return data;
}

function getElementByProps(prop) {
  return document.querySelector(prop);
}

function getElementsByProps(prop) {
  return document.querySelectorAll(prop);
}

function insertAdjacentElement(targetElement, position, contentToAdd) {
  return targetElement.insertAdjacentHTML(position, contentToAdd);
}

export {
  fetchItemsByUrl,
  getElementByProps,
  getElementsByProps,
  insertAdjacentElement,
};
