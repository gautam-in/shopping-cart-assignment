const BASE_PATH = 'http://localhost:3000/';
const PATHS = {
    CATEGORIES: 'categories',
    PRODUCTS:'products',
    BANNERS: 'banners',
    ADD_TO_CART: 'addToCart'
}
const fetchData = (path, method='GET', data=null) => {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if (data) {
		options.data = {
			...options.data,
			...data
		};
	}
    return fetch(`${BASE_PATH}${path}`, options).then((res) => res.json());
}

function displayCategories() {
    let categotyPromise = fetchData(PATHS.CATEGORIES);
    categotyPromise.then((Categories) => {
        for (let category of Categories) {
            categoryItem(category);
        }
    });
}
function off() {
    document.getElementById("overlay").style.display = "none";
}
function diselectOthers(element, classname){
    const elems = document.querySelectorAll(element);

    [].forEach.call(elems, function(el) {
        el.classList.remove(classname);
    });
}