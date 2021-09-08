// Function that creates DOM element
// accepts => element tag name + attributes as {key: value, key: value}
// returns <tag key=value />
function createDomEle(element, attributes) {
    let newElement = document.createElement(element);
    if(attributes){
        Object.keys(attributes).forEach(key => {
            newElement.setAttribute(key, attributes[key]);
        });
    }
    return newElement;
}