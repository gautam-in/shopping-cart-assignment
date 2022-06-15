async function postCartData(type, data) {
  const res = await fetch("/cart/" + type, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return await res.json();
}

const cartController = (function() {
  return {
    updateItemCount: function(itemId, count, price, totalCount, totalPrice) {
      count = count || 0;
      if (count > 0) {
        document.querySelectorAll(
          'span[data-id="' + itemId + '"]'
        )[0].innerHTML = count;
        document.querySelectorAll(
          'span[class="cart__item__detail__info--total"][data-id="' +
            itemId +
            '"]'
        )[0].innerHTML = "Rs." + price * count;
      } else {
        let elem = document.querySelectorAll(
          'div[class="cart__item"][data-id="' + itemId + '"]'
        )[0];
        elem.parentNode.removeChild(elem);
      }
      document.getElementsByClassName("cart__header__text")[0].innerHTML =
        "My Cart (" + totalCount + " items)";

      document.getElementsByClassName(
        "checkout__box__button--price"
      )[0].innerHTML = "Rs." + totalPrice;
    }
  };
})();

(function(removeItemElems, addItemElems, cartCountElem, cartController) {
  [
    {
      elems: removeItemElems,
      type: "remove"
    },
    {
      elems: addItemElems,
      type: "add"
    }
  ].forEach(function(elemsOperation) {
    [].forEach.call(elemsOperation.elems, element => {
      element.addEventListener("click", event => {
        event.preventDefault();
        let productId = event.target.getAttribute("data-id");
        postCartData(elemsOperation.type, {
          productId: productId
        }).then(function(cart) {
          cartCountElem.innerHTML = cart.count + " items";
          let cartProductDetail = cart.items.find(
            item => item.product.id === productId
          );
          cartController.updateItemCount(
            productId,
            cartProductDetail && cartProductDetail.count,
            cartProductDetail && cartProductDetail.product.price,
            cart.count,
            cart.totalPrice
          );
        });
      });
    });
  });
})(
  document.getElementsByClassName("cart__item__detail__info--remove"),
  document.getElementsByClassName("cart__item__detail__info--add"),
  document.getElementsByClassName("nav__end__cart--count")[0],
  cartController
);

