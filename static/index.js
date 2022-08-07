
const UI = Model('hidden')
document.addEventListener('DOMContentLoaded', () => {
    //(alert,0,'Loaded');
    UI('home');
    fetch('http://localhost:5000/categories').then((resp) => {
        resp.json().then(data => {
            ShowBanners(data);
        })
    })
    HandleInputAttribute();
});

function ShowBanners(categories) {

    let filtered = categories.filter((item => item.order >= 0));
    filtered.sort(function (a, b) {
        return b.order < a.order ? 1 : -1;
    });

    let template = document.querySelector("#categories div[template]");
    for (let i = 0; i < filtered.length; i++) {
        const jsonItem = filtered[i];
        let item = template.cloneNode(true);
        item.removeAttribute('template');

        item.classList.remove('item-alt');//just in case

        let img = item.querySelector('img');
        img.src = jsonItem.imageUrl;
        img.setAttribute('alt', jsonItem.name)

        let name = item.querySelector('img+div>div>h2.desc-item');
        name.append(jsonItem.name)

        let desc = item.querySelector('img+div>div p.desc-item');
        desc.append(jsonItem.description)

        let link = item.querySelector('img+div>div a.desc-item');

        //not sure about, may need to change according the approach of navigating different page
        link.setAttribute('href', "Categories/" + jsonItem.key);

        link.append("Explore " + jsonItem.key);

        template.parentElement.appendChild(item);
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