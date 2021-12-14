async function fetchProducts(url) {
    try {  
      let data = await fetch(url);
      let res = await data.json();
      return res; 
    } catch(err) {
        return null;
      };
  }

  function addProductToDOM(products) {
      products.forEach(element => {
        let div_item = document.createElement('div');
        div_item.setAttribute('class','item');

        let div_item_heading = document.createElement('div');
        div_item_heading.setAttribute('class','item_heading');
        let div_sub_heading = document.createElement('h3');
        div_sub_heading.setAttribute('class','sub_heading');
        div_sub_heading.innerHTML = element.name;
        div_item_heading.appendChild(div_sub_heading);
        div_item.appendChild(div_item_heading);

        let div_item_image = document.createElement('div');
        div_item_image.setAttribute('class','item_image');
        let div_it_image = document.createElement('img');
        div_it_image.setAttribute('class','it_image');
        div_it_image.src = `../../${element.imageURL}`;
        div_item_image.appendChild(div_it_image);
        div_item.appendChild(div_item_image);

        let div_item_description = document.createElement('div');
        div_item_description.setAttribute('class','item_description');
        let para = document.createElement('p');
        para.innerHTML = element.description;
        div_item_description.appendChild(para);
        div_item.appendChild(div_item_description);

        let div_item_purchase = document.createElement('div');
        div_item_purchase.setAttribute('class','item_purchase');
        let price = document.createElement('span');
        let butt = document.createElement('button');
        price.innerHTML = `Price Rs.${element.price}`;
        butt.innerHTML = 'Buy Now';
        div_item_purchase.appendChild(price);
        div_item_purchase.appendChild(butt);
        div_item.appendChild(div_item_purchase);

        document.querySelector('.products').appendChild(div_item);

      });
  }

  function filterFunction(products, category) {
  
    if(category == null)
        return products;
    else{
        return products.filter( item =>{
            return item.category == category;
        })
    }
  }

  function saveCategoryToLocalStorage(category) {
    localStorage.setItem('category',JSON.stringify(category));
    return true;
  }

  function getCategoryFromLocalStorage() {
    let temp = localStorage.getItem('category');
    return (JSON.parse(temp));
  }

  export {
    fetchProducts,
    addProductToDOM,
    filterFunction,
    saveCategoryToLocalStorage,
    getCategoryFromLocalStorage,
  };