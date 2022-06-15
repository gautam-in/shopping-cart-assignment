import "../styles/home.scss";
import "../styles/cart.scss";

const loadHomeData = async () => {
    try {
        const productsUrl = "http://localhost:3200/categories";
        const resJson = await fetch(productsUrl);
        const categories = await resJson.json();

        const categoriesItem = document.getElementById("categories");

        for (let itm = 0; itm < categories.length; itm++) {
            const element = categories[itm];
            const itemsDiv = document.createElement("div")
            itemsDiv.className = "categories__item";

            itemsDiv.innerHTML = `
                            <div>
                                <img src=${element.imageUrl} alt="${element.name}">
                            </div>
                            <div>
                                <h1>${element.name}</h1>
                                <p>${element.description}</p>
                                <button type="button" class="btn">Explore ${element.name} </button>
                            </div>
                       `
            categoriesItem.appendChild(itemsDiv)
        }

    } catch (error) {
        console.log("Error>>>",error)
    }
}
loadHomeData()



let url='http://localhost:3200/'

let sectionForBanners = document.getElementById("section-for-banners")
let loadedBanners=[]
let slideIndex=0
let node;
const bannerLoader = async ()=>{
    try {
        const response = await fetch(`${url}banner`);
        loadedBanners = await response.json();
        printBanners(loadedBanners)
    }
    catch(error){
        console.log(error)
    }
}

const printBanners = data => {

    for (let i = 0; i < data.length; i++) {
        let banner = document.createElement('div')
        banner.setAttribute('class','banner')
        banner.setAttribute('id',data[i].order)

        let imageOfBanner = document.createElement('img')
        imageOfBanner.setAttribute('class','myBannerImage')
        imageOfBanner.src = data[i].bannerImageUrl
        imageOfBanner.alt = data[i].bannerImageAlt

        banner.hidden = true
        banner.appendChild(imageOfBanner)
        sectionForBanners.appendChild(banner)

    }
    bannerImageDisplay(slideIndex)
}




 const bannerImageDisplay = index => {
  if (node) {
    node.hidden = true;
  }
  if (index >= loadedBanners.length) {
    slideIndex = 0;
  }

  let newImg = document.getElementById(slideIndex + 1);
  if (newImg) {
    newImg.hidden = false;
    node = newImg;
  }
  slideIndex++;

  setTimeout(() => {
    // showNextImage();
    bannerImageDisplay(slideIndex)
  }, 5000);
}


//..........................................................................
// For Cart ..................................................................

let modal = document.getElementById("cart_modal");
let cartData = [];
let countOfItem = 1

const getCartData = async () => {
  const url = "http://localhost:3200/cart"
  const jsonData = await fetch(url);
  const resData = await jsonData.json();
  const itemCount = document.getElementById("itemCount")
  itemCount.innerHTML = resData.length + " Item";
  cartData = resData;
}

var btn = document.getElementById("openModal");
var span = document.getElementById("close");

btn.onclick = function () {
  let totalCartAmount=0
  modal.style.display = "block";
  const cartItem = document.getElementById("cart_item");
  const cartTitle = document.getElementById("cart-title");
  cartTitle.innerHTML = `My Cart (${cartData.length} item)`;
  const totalCartAmountElement = document.getElementById("total_cart_amount")

  if (cartData.length > 0) {
    for (let i = 0; i <= cartData.length; i++) {
      const element = cartData[i]
      totalCartAmount = totalCartAmount + element.price;
      const div = document.createElement("div")
      div.classList = "cart-list"
      div.innerHTML = `
      <div class="cart-list-item">
            <img src=${element.imageURL} alt="${element.name}"/>
            <div class="dlsITem">
              <text>${element.name}</text> </br>
              <button>-</button> ${countOfItem}
              <button>+</button><text> &times; Rs.${element.price}</text>
            </div>
            <div>
                Rs.${element.price * countOfItem}
            </div>
      </div>
      `
      cartItem.appendChild(div);
      totalCartAmountElement.innerHTML = `Rs. ${totalCartAmount}  > `
    }
  } else {
    const div = document.createElement("div")
    cartItem.classList = "no-item-list"
    div.innerHTML = `
      <div>
          <h2>No items in your cart</h2>
         <span>your favorite items are just a click away</span>
      </div>
      `
    cartItem.appendChild(div)
  }
  element.style.display = "block"
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

getCartData();
bannerLoader()
