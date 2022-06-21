let currentSlide = 0;

function fetchBannerData(){
    debugger;
    return fetch('http://localhost:5000/banners')
        .then((response) => {
            if(response.ok){
                return response.json(); 
            }
            throw "Something Went Wrong"
        }).then(data => data)
        .catch(err => console.log(err));
}

let first_content = document.getElementById('first_content');

fetch('http://localhost:5000/categories', {method : 'get', headers: {
    'Accept': 'application/json',
    // 'content-type' : 'application/javascript;charset=utf-8'
},
}).then( (data) => {
    const parsed =  data.json();     
    console.log(parsed);   
})

first_content.textContent = 'A Varity of Fresh fruits and Vegetables';
first_content1.textContent = 'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.';
first_content2.textContent = 'Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ';
first_content3.textContent = 'Buy beauty and personal care products online in India at best prices.';
first_content4.textContent = 'Shop online for Baby Products, Diapers, Skin Care Products,etc.';