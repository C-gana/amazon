let cart = [];
let cartQuantity = 0;
updateCartQuantity();

function updateCartQuantity() {
  const cartElement = document.querySelector(".js-cart-count");
  cartElement.innerHTML = cartQuantity;
}
