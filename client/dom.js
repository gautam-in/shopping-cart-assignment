
function createDomElement(element, attributes) {
    let newElement = document.createElement(element);
    if(attributes){
        Object.keys(attributes).forEach(key => {
            newElement.setAttribute(key, attributes[key]);
        });
    }
    return newElement;
}