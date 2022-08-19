let currentCategory;
/**@type {MyLocalService}*/
let Service = null;

const sectionCallbacks = {
    products: () => {
        ShowCategories().then(() => {
            if (currentCategory) {
                //load and show items from selected category
                //server does not filter so we can filter after response is received
                Service.GetProducts().then((resp) => {
                    resp.json().then(data => {
                        ShowProducts(data.filter((item => item.category == currentCategory.id)));
                    })
                })
            } else {
                Service.GetProducts().then((resp) => {
                    resp.json().then(data => {
                        ShowProducts(data)
                    })
                })
            }
        });
    },
    home: () => {
        Service.GetCategories().then((resp) => {
            resp.json().then(data => {
                ShowBanners(data);
            })
        })
        HandleInputAttribute();
    },
};

function FilterAndSortCategories(items) {
    return items.sort((a, b) => b.order < a.order ? 1 : -1).filter(item => item.order >= 0);
}
function ShowBanners(categories) {

    let filtered = FilterAndSortCategories(categories);

    let template = document.querySelector("#categories div[template]");
    let list = template.parentElement;

    //clear previous items if any
    while (list.firstChild && list.lastChild != template) {
        list.removeChild(list.lastChild);
    }

    for (let i = 0; i < filtered.length; i++) {
        let jsonItem = filtered[i];
        let item = template.cloneNode(true);
        item.removeAttribute('template');

        item.classList.remove('item-alt');//just in case

        let img = item.querySelector('img');
        img.src = jsonItem.imageUrl;
        img.setAttribute('alt', jsonItem.name)

        let name = item.querySelector('h2.desc-item');
        name.append(jsonItem.name)

        let desc = item.querySelector('p.desc-item');
        desc.append(jsonItem.description)

        let link = item.querySelector('a.desc-item');

        //not sure about, may need to change according the approach of navigating different page
        link.setAttribute('href', "#products?key=" + jsonItem.key);
        link.addEventListener('click', () => {
            currentCategory = jsonItem;
            ShowSection('products');
        });
        link.append("Explore " + jsonItem.key);

        template.parentElement.appendChild(item);
    }
}
function ShowProducts(products) {
    let template = document.querySelector('section.plp div.item-list div.item[template]')
    let list = template.parentElement;

    //clear previous items if any
    while (list.firstChild && list.lastChild != template) {
        list.removeChild(list.lastChild);
    }

    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let viewItem = template.cloneNode(true);

        viewItem.removeAttribute('template');

        let element = viewItem.querySelector('h3');
        element.append(product.name);

        element = viewItem.querySelector('img');
        element.setAttribute('src', product.imageURL);
        element.setAttribute('alt', product.name);

        element = viewItem.querySelector('p');
        element.append(product.description);

        element = viewItem.querySelector('div.bottom span.price');
        element.append('MRP Rs. ' + product.price);

        element = viewItem.querySelector('div.bottom button.button');

        element.addEventListener('click', () => {
            //handle buy now click
            AddToCart(product);
        })

        list.append(viewItem);
    }
}
function HandleInputAttribute() {
    document.querySelectorAll('.m-control input.m-input').forEach(input => {
        input.addEventListener('input', (e) => {
            if (e.target.value.length) {
                e.target.setAttribute('hasvalue', 'true')
            } else {
                e.target.removeAttribute('hasvalue')
            }
            return true;
        })
    });
}
function Model(css) {
    let _ = document.querySelector.bind(document);
    const elements = {
        products: 'section.plp',
        login: 'section.login',
        home: ['section#offers-area', 'section#categories'],
        signup: 'section.login + section.login'
    }
    let all = [];
    for (const n in elements) {
        if (Object.hasOwnProperty.call(elements, n)) {
            const element = elements[n];
            all.push(element);
        }
    }
    all = all.flat(2);

    function _hideAll() {
        all.forEach(a => {
            /**
             * @type {HTMLTableSectionElement}
             */
            let elem = _(a);
            if (elem) {
                elem.classList.remove(css);//to make sure there is only one
                elem.classList.add(css);
            }
        });
    }

    function showOne(selector) {
        /**@type {HTMLTableSectionElement}*/
        let elem = _(selector);
        if (elem) {
            elem.classList.remove(css);
        }
    }

    function Show(name) {
        let cb = sectionCallbacks[name];
        if (typeof cb == "function") {
            queueMicrotask(cb);
        }

        let items = elements[name.toLowerCase()];
        if (items) {
            if (Array.isArray(items) && items.length) {
                _hideAll();
                items.forEach(a => showOne(a));
            } else if (typeof items === "string" && items) {
                _hideAll();
                showOne(items);
            } else {
                console.assert(flase, "unsopported format")
            }
        }

    }
    return Show;
}
async function ShowCategories() {

    let categories = await (await Service.GetCategories()).json();
    let filtered = FilterAndSortCategories(categories);

    let ul = document.querySelector('section#page-category aside ul.product-category');

    while (ul.firstChild) {
        ul.removeChild(ul.lastChild);
    }

    for (let i = 0; i < filtered.length; i++) {
        let category = filtered[i];

        let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute('href', "#products?key=" + category.key);
        a.addEventListener('click', () => { currentCategory = category; ShowSection('products'); });
        a.append(category.name);
        li.append(a);
        ul.append(li);
        if (currentCategory && category.id == currentCategory.id) {
            a.style.fontWeight = "bold";
        }
    }
}

//Entry
/*************************************************************/
const ShowSection = Model('hidden');
document.addEventListener('DOMContentLoaded', () => {
    ShowSection('home');
    Service = new MyLocalService(window.location.host, 80, true);
    SlideNav.buildSlides();
});