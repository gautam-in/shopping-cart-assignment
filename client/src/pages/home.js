let bannerItems = "";
let productItems = "";
async function bannersData() {
    try {
      let response = await fetch("http://localhost:5000/banners");
      let banners = await response.json(); // ok
      displayBannerItems(banners);
    } catch (error) {
      console.log(error);
    }
  }

function displayBannerItems(banners){
    for(let i=0; i<banners.length; i++)
    {
        if(i===0){
            fillCrousalActiveElement(banners[0]);
        }
        else{
            fillCrousalElements(banners[i])
        }
    }
}

function fillCrousalActiveElement(banners){
    bannerItems += `<div class="item active">
    <img
    src="../../..${banners.bannerImageUrl}"
    alt="${banners.bannerImageAlt}"
    style="width: 100%"
  />
  </div>`
  document.querySelector(".carousel-inner").innerHTML = bannerItems;

}
function fillCrousalElements(banners){
    
    bannerItems += `<div class="item">
    <img
    src="../../..${banners.bannerImageUrl}"
    alt="${banners.bannerImageAlt}"
    style="width: 100%"
  />
  </div>`
  document.querySelector(".carousel-inner").innerHTML = bannerItems;

}

async function productsData() {
    try {
      let response = await fetch("http://localhost:5000/categories");
      let categories = await response.json(); // ok
      displayCategoriesItems(categories);
    } catch (error) {
      console.log(error);
    }
  }

function displayCategoriesItems(categories){
    let enabledCategories = [];
    for(let i=0; i<categories.length; i++)
    {

        if(categories[i].enabled){
            enabledCategories.push(categories[i])

        }
       
    }

    for(let i=1; i<=enabledCategories.length; i++)
    {
            fillCategoriesActiveElement(enabledCategories[i],i)
    }
    
}

function fillCategoriesActiveElement(categories,index){
    if(index % 2 === 0){
        productItems += `<div style="order: ${categories.order}">
      <ul class="product_home">
        <li><strong>${categories.name}</strong></li>
        <li>${categories.description}</li>
        <li><button><a href="#">Explore ${categories.key}</a></button></li>
      </ul>
      <img
        height="200"
        width="300"
        class="prodcutsImages"
        src="../../..${categories.imageUrl}"
        alt="${categories.description}"
      /></div>`
      
    }
    else{
        productItems += `<div style="order: ${categories.order}"><img
        class="prodcutsImages"
        src="../../..${categories.imageUrl}"
        alt="${categories.description}"
      />
      <ul class="product_home">
        <li><strong>${categories.name}</strong></li>
        <li>${categories.description}</li>
        <li><button><a href="#">Explore ${categories.key}</a></button></li>
      </ul></div>`
    }
    

  document.querySelector(".productsCategory").innerHTML = productItems;

}

window.addEventListener("DOMContentLoaded",()=>{bannersData();productsData();});
