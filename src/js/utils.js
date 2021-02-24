/**
* @function renderHTML
* @param {string} selector - html element container where data has to be populated
* @param {object} template - handlebar template to be used for populating data
* @param {object} data - data to be mapped in the template
* generates the html view using selector, handlebar template and data which will populate the data
*/

const renderHTML = (selector, template, data) => {
  const viewTemplate = document.getElementById(selector)
  viewTemplate.innerHTML = template(data)
}
export {
  renderHTML
}
