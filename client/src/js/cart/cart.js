import { network, domain_port } from "../../service/service.js";

(() => {
  const cartGridEl = document.querySelector("#cart-item");
  const closeEl = document.querySelector("#close");
  //get token from session
  const userId = sessionStorage.getItem("userId");

  //set button text in cart UI
  const setBtnText = (response) => {
    const totalItems = response && response.products && response.products.length ? response.products.length: 0;
    if (totalItems > 0) {
      const btnEl = document.getElementById("next-step");
      const totalCost = response.products.reduce((acc, product) => (acc = acc + product.price * product.quantity),0);
      btnEl.textContent = `Checkout for payment Rs.${totalCost}`;
    }
  };

  //Create Cart UI
  const createCartItem = async () => {
    try {
      const response = await network(`/cart?userId=${userId}`, {
        method: "GET",
      });
      if (response) {
        const totalItems = response.products && response.products.length? response.products.length: 0;
        if (totalItems) {
          updateHeader(totalItems);
          updateCartHeader(totalItems);
        } else {
          //TODO: Error handling If no Product found
        }
        cleanCart();
        createGridItem(cartGridEl, response);
        setBtnText(response);
      }
    } catch (error) {
      const noCartFound = `<div class="no-cart-div"><section class="no-cart"><strong>No Item in your cart</strong></section><p>Your favourite items are just a click away</p></div>`;
      cartGridEl.innerHTML = noCartFound;
    }
  };

  //adding event listner on cross button on cart header
  closeEl.onclick = () => openCloseCart();

  //show/hide cart on UI
  const openCloseCart = () => {
    const cartContainer = document.querySelector("#cart-container");
    if (cartContainer) {
      const display = cartContainer.style.display;
      if(display === 'none')
        cartContainer.style.setProperty("display", "block", "");
      else
       cartContainer.style.setProperty("display", "none", "");
    }
  };

  //clear cart items on UI
  const cleanCart = () => {
    cartGridEl.innerHTML = "";
  };

  //Create Grid Element
  const createGridEl = (product) => {
    if (product) {
      const gridEl = document.createElement("div");
      gridEl.classList.add("grid-container");
      gridEl.setAttribute("id", `grid-container-${product.productId}`);
      return gridEl;
    }
    return null;
  };

  //Create Title
  const createTitle = (product) => {
    if (product) {
      let productTitleEl = document.createElement("div");
      let strongEl = document.createElement("strong");
      strongEl.textContent = product.name;
      productTitleEl.classList.add("item1");
      productTitleEl.appendChild(strongEl);
      return productTitleEl;
    }
    return null;
  };

  //create image thumbnail
  const createThumbnailEl = (product) => {
    if (product) {
      let productImgContainer = document.createElement("div");
      productImgContainer.classList.add("item2");
      let productImgEl = document.createElement("img");
      productImgEl.setAttribute("height", "100");
      productImgEl.setAttribute("width", "100");
      productImgEl.setAttribute("src", `${domain_port}${product.productImg}`);
      productImgEl.setAttribute("alt", `${product.name}`);
      productImgContainer.appendChild(productImgEl);
      return productImgContainer;
    }
    return null;
  };

  //create Grid Items in Grid Container
  const createGrid = (product) => {
    if (product && product.quantity >= 1) {
      let grid = createGridEl(product);
      if (grid) {
        //Create Title
        let productTitleEl = createTitle(product);
        grid.appendChild(productTitleEl);

        //Create Image
        let imageThumbnailEl = createThumbnailEl(product);
        grid.appendChild(imageThumbnailEl);

        //Remove Button
        let removeBtn = document.createElement("button");
        removeBtn.classList.add("item3");
        let removeImgEl = document.createElement("img");
        removeImgEl.setAttribute("height", "25");
        removeImgEl.setAttribute("width", "25");
        removeImgEl.setAttribute("src", `../../static/images/minus.png`);
        removeImgEl.setAttribute("alt", `minus button`);
        removeBtn.appendChild(removeImgEl);
        removeBtn.onclick = () => remove(product);
        grid.appendChild(removeBtn);

        //quantity
        let quantityEl = document.createElement("div");
        quantityEl.classList.add("item4");
        quantityEl.textContent = `${product.quantity}`;
        quantityEl.setAttribute("id", `quantity-${product.productId}`);
        grid.appendChild(quantityEl);

        //Add button
        let addBtn = document.createElement("button");
        addBtn.classList.add("item5");
        let addImgEl = document.createElement("img");
        addImgEl.setAttribute("height", "25");
        addImgEl.setAttribute("width", "25");
        addImgEl.setAttribute("src", `../../static/images/plus.png`);
        addImgEl.setAttribute("alt", `plus button`);
        addBtn.appendChild(addImgEl);
        addBtn.onclick = () => add(product);
        grid.appendChild(addBtn);

        //space
        let spaceEl = document.createElement("div");
        spaceEl.classList.add("item6");
        spaceEl.textContent = "x";
        grid.appendChild(spaceEl);

        //Price
        let priceEl = document.createElement("div");
        priceEl.classList.add("item7");
        priceEl.textContent = `Rs ${product.price}`;
        grid.appendChild(priceEl);

        //Total Price
        let totalPriceEl = document.createElement("div");
        totalPriceEl.classList.add("item8");
        totalPriceEl.textContent = `Rs ${product.price * product.quantity}`;
        grid.appendChild(totalPriceEl);
        return grid;
      }
      return null;
    }
    return null;
  };

  //Append Child Note to Parent Node
  const createGridItem = async (cartGridEl, cart) => {
    const cartList = cart.products;
    for (let product of cartList) {
      let grid = createGrid(product);
      if (grid) {
        cartGridEl.appendChild(grid);
      }
    }

    createLowPriceSection();
  };

  //create Low price section
  const createLowPriceSection = () => {
    const sectionEl = document.createElement("section");
    sectionEl.classList.add("low-price");
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", "../../static/images/lowest-price.png");
    imgEl.setAttribute("alt", "cart-banner");
    imgEl.setAttribute("loading", "lazy");
    sectionEl.appendChild(imgEl);
    const pEl = document.createElement("span");
    pEl.textContent = "You won't find it cheaper anywhere";
    sectionEl.appendChild(pEl);
    cartGridEl.appendChild(sectionEl);
  };

  // Add Item in Cart
  const add = async (product) => {
    if (product) {
      const productId = product.productId;
      const quantityEl = document.querySelector(`#quantity-${productId}`);
      const totalQuantity = parseInt(quantityEl.textContent);
      if (totalQuantity < product.stock) {
        try {
          await addItemToCart(product);
          await createCartItem();
        } catch (error) {
          console.log(error);
          //TODO: Error handling if item is not added to cart
        }
      }
    }
  };

  //Remove Item in Cart
  const remove = async (product) => {
    if (product) {
      try {
        const status = await removeItemToCart(product);
        if (status) {
          await createCartItem();
        }
      } catch (error) {
        console.log(error);
        //TODO: Error handling if item is not removed to cart
      }
    }
  };

  //API call to remove Item from cart collection
  const removeItemToCart = async (product) => {
    if (product) {
      let options = {
        method: "PUT",
        data: {
          userId: userId,
          productId: product.productId,
        },
      };
      return await network(`/removeToCart`, options);
    }
    return null;
  };

  //API call to add Item from cart collection
  const addItemToCart = async (product) => {
    if (product) {
      let options = {
        method: "POST",
        data: {
          userId: userId,
          product: {
            productId: product.productId,
            productImg: product.productId,
            stock: product.stock,
            quantity: 1,
            name: product.name,
            price: product.price,
          },
        },
      };
      return await network(`/addToCart`, options);
    }
    return null;
  };

  //Emit update-header event
  const updateHeader = (totalCartItems) => {
    var event = new CustomEvent("update-header", { detail: totalCartItems });
    document.dispatchEvent(event);
  };

  //Update totalItems in cart header
  const updateCartHeader = (count) => {
    const cartItemTitle = document.getElementById("cart-header-item");
    cartItemTitle.innerHTML = `My Cart (${count})`;
  };

  //Listner to update-cart event
  document.addEventListener("update-cart", function (e) {
    createCartItem();
  });

  createCartItem();
})();
