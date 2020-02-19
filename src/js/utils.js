// rendering templates
const renderHTML = (selector, template, data) => {
  const viewTemplate = document.getElementById(selector)
  viewTemplate.innerHTML = template(data)
}
export {
  renderHTML
}
