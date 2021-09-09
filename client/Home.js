var slideIndex = 1;

async function loadBanner() {
  let allBanners = await fetch('http://localhost:5000/banners')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Resource not found !");
      }
    });
  banners = Array.from(allBanners);
  bannerImg = document.getElementById("banner-img");
  bannerImg.setAttribute('src', banners[slideIndex - 1].bannerImageUrl);
  bannerImg.addEventListener('click',onBannerClick);




  let bannerContainer = document.getElementById("banner");
  var dotsContainer = document.createElement('div');
  dotsContainer.setAttribute("id", 'dotsContainer');
  dotsContainer.setAttribute("class", 'dotsContainer');

  for (let i = 0; i < banners.length; i++) {
    var dot = document.createElement('div');
    dot.setAttribute('class', 'dot inactive');
    dot.setAttribute('id', i);
    dot.addEventListener('click', showCurrentSlide);
    dotsContainer.appendChild(dot);
  }

  bannerContainer.appendChild(dotsContainer);



  loadCategory();
}

function activateDot() {

  dotList = document.getElementById('dotsContainer').childNodes;
  for (dot of dotList) {
    if (dot.id == slideIndex - 1) { dot.className = "dot active"; }
    else {
      dot.className = "dot inactive";
    }
  }
}



function showCurrentSlide(e) {

 console.log(e);
  slideIndex = +e.srcElement.attributes.id.value + 1;

 bannerImg.setAttribute('src', banners[slideIndex - 1].bannerImageUrl);
  activateDot();
}



function prevButtonClick() {

  slideIndex--;
  if (slideIndex < 1) { slideIndex = banners.length; }

  bannerImg.setAttribute('src', banners[slideIndex - 1].bannerImageUrl);
  console.log(slideIndex);
  activateDot();

}

function nextButtonClick() {

  slideIndex++;

  if (slideIndex > banners.length) { slideIndex = 1; }

 bannerImg.setAttribute('src', banners[slideIndex - 1].bannerImageUrl);
  console.log(slideIndex);
activateDot();

}



function fetchCategory() {
  return fetch('http://localhost:5000/categories')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Resource not found !");
      }
    });

}

async function loadCategory() {

  allCategories = await fetchCategory();
  let CategoriesList=Array.from(allCategories).filter(item => item.name != 'Seafood');

  var Categories = document.getElementById('Categories');
  for (category of CategoriesList) {

    var categoryContainer = document.createElement('div');
    categoryContainer.setAttribute('class', "categoryContainer");
   

    var categoryImg = document.createElement('img');
    categoryImg.setAttribute('src', category.imageUrl);
    categoryImg.setAttribute('alt', category.name);
    categoryImg.setAttribute('class', "categoryImg");

    var categoryDetails = document.createElement('div');
    categoryDetails.setAttribute('class', "categoryDetails");

    var categoryTitle = document.createElement('h2');
    categoryTitle.innerText = category.name;
    categoryTitle.setAttribute('class', "categoryTitle");

    var categoryDescription = document.createElement('p');
    categoryDescription.innerText = category.description;
    categoryDescription.setAttribute('class', "categoryDescription");

    var categoryButton = document.createElement('button');
    categoryButton.innerText = 'Explore ' + category.key;
    categoryButton.setAttribute('class', "categoryButton");
    categoryButton.setAttribute('id',category.id);
    categoryButton.addEventListener('click',selectCategory);

    categoryContainer.appendChild(categoryImg);
    categoryDetails.appendChild(categoryTitle);
    categoryDetails.appendChild(categoryDescription);
    categoryDetails.appendChild(categoryButton);
    categoryContainer.appendChild(categoryDetails);



    categoriesDivider=document.createElement('hr');
    // categoryContainer.appendChild(categoriesDivider);
    Categories.appendChild(categoryContainer);
    Categories.appendChild(categoriesDivider);
  }

}

function selectCategory(e){

localStorage.setItem('selectedCategory',e.srcElement.id);
window.location.href="Products.html";
}

function onBannerClick(e) {
  console.log(e.srcElement.src);
  console.log((e.srcElement.src).indexOf("offer1.jpg"));
  if (+(e.srcElement.src).indexOf("offer5.jpg") > 1) {
    localStorage.setItem('selectedCategory', "5b675e5e5936635728f9fc30");
  } else {
    localStorage.setItem('selectedCategory', "5b68994e3d1a866534f516df");
  }

  window.location.href = "Products.html";


}









