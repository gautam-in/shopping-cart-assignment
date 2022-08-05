document.addEventListener('DOMContentLoaded', () => {
    //(alert,0,'Loaded');
    fetch('http://localhost:5000/categories').then((resp) => {
        resp.json().then(data => {
            ShowBanners(data);
        })
    })
});

function ShowBanners(categories) {

    let filtered = categories.filter((item => item.order >= 0));
    filtered.sort(function (a, b) {
        return b.order < a.order ? 1 : -1;
    });

    let template = document.querySelector("div[template]");
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