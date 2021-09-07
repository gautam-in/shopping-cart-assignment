const createElementHelper = (type, classList, innerText, innerHTML) => {
  const customElement = document.createElement(type);
  if (classList) customElement.classList = classList;
  if (innerText) customElement.innerText = innerText;
  if (innerHTML) customElement.innerHTML = innerHTML;

  return customElement;
};

const makeRequest = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    
    return data;
  } catch (error) {
    throw Error('Failed to fetch...');
  }
};
