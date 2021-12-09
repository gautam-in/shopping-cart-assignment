const displayHeader = () => {
  const headerDiv = document.getElementById("header");
  const imgDiv = document.createElement("div");
  const navDiv = document.createElement("div");
  const cartDiv = document.createElement("div");
  const authLinks = document.createElement("div");
  const cartCountDiv = document.createElement("div");
  const img = document.createElement("img");
  const cartImg = document.createElement("img");
  const homeLink = document.createElement("a");
  const productsLink = document.createElement("a");
  const signinLink = document.createElement("a");
  const registerLink = document.createElement("a");
  const IndexPageLink = document.createElement("a");
  const CartPageLink = document.createElement("a");
  const count = document.createElement("span");

  const itemsCount = JSON.parse(localStorage.getItem("cart"))?.length;

  count.id = "total_Items";
  img.setAttribute("src", "../../../static/images/logo.png");
  img.setAttribute("alt", "logo");
  img.style = "height:100%;width:100%;";
  IndexPageLink.href = "../homepage/index.html";
  IndexPageLink.appendChild(img);
  imgDiv.className = "img-container";
  imgDiv.appendChild(IndexPageLink);
  headerDiv.appendChild(imgDiv);

  homeLink.href = "../homepage/index.html";
  homeLink.innerHTML = "Home";
  homeLink.style = "margin-right:15px";

  productsLink.href = "../products/products.html";
  productsLink.innerHTML = "Products";

  navDiv.className = "navigate";
  navDiv.appendChild(homeLink);
  navDiv.appendChild(productsLink);
  headerDiv.appendChild(navDiv);

  cartDiv.className = "cart-container";
  authLinks.className = "auth";
  signinLink.href = "../login/login.html";
  signinLink.style = "font-size:14px;font-weight:500;margin-right:10px";
  signinLink.innerHTML = "Signin";
  registerLink.href = "../register/register.html";
  registerLink.style = "font-size:14px;font-weight:500;";
  registerLink.innerHTML = "Register";
  authLinks.appendChild(signinLink);
  authLinks.appendChild(registerLink);
  cartDiv.appendChild(authLinks);

  CartPageLink.href = "../../pages/cart/cart.html";
  cartImg.setAttribute("src", "../../../static/images/cart.svg");
  cartImg.setAttribute("alt", "cart-logo");
  cartImg.style = "width: 50px; height: 30px";
  count.innerHTML = `${itemsCount} Items`;
  cartCountDiv.className = "cart-content";
  CartPageLink.appendChild(cartImg);
  cartCountDiv.appendChild(CartPageLink);
  cartCountDiv.appendChild(count);
  cartDiv.appendChild(cartCountDiv);
  headerDiv.appendChild(cartDiv);
};

displayHeader();
