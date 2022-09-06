import { network,domain_port } from "../../service/service.js";
(() => {
  const categoryEl = document.querySelector(".main-content-category");

  //create grid container
  const createGrid = ()=>{
      const gridEl = document.createElement('div');
      gridEl.classList.add('gridEl');
      return gridEl;
  };

  //It will create grid children
  const creatGridChild = (category)=>{
      const imgEl = document.createElement('img');
      imgEl.src = `${domain_port}${category.imageUrl}`;
      imgEl.alt = `${category.description}`;
      imgEl.classList.add('gridEl-gridElChild');
      return imgEl;
  };

  //create item in category list.
  const createChildContent = (category)=>{
      const contentEl = document.createElement('section');
      contentEl.setAttribute('style','text-align:center');
      const titleEl = document.createElement('h3');
      titleEl.textContent = category.name;
      const descriptionEl = document.createElement('p');
      descriptionEl.textContent = category.description;
      const btnEl = document.createElement('button');
      btnEl.textContent = `Explore ${category.name}`;
      btnEl.classList.add('gridEl-explore');
      //add click listner on explore button on category item.
      btnEl.onclick = ()=> navigateToProduct(category);
      contentEl.appendChild(titleEl);
      contentEl.appendChild(descriptionEl);
      contentEl.appendChild(btnEl);
      return contentEl;
  };

  //create category list for homepage.
  const createList = async()=>{
    //get categories from api
    let categories = await network(`/categories`,{method:'GET'});
    if(Array.isArray(categories) && categories.length > 0){
      //sort categories based on order coming in api response
      categories = categories.sort((a, b) => a.order - b.order);
        for(const category in categories){
            //filter category which is enable in nature
            if(categories[category].enabled){
                const gridEl = createGrid();
                const gridChild = creatGridChild(categories[category]);
                gridEl.appendChild(gridChild);
                const gridChildContent = createChildContent(categories[category]);
                gridEl.appendChild(gridChildContent);
                categoryEl.appendChild(gridEl);
            }
        }
    }
  };

  //Navigate to product page with category Id as query param
  const navigateToProduct = (category)=>{
    window.location.href = `products.html?category=${category.id}`;
  };

  createList();
})();
