let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartQuantity =
    Number(JSON.parse(localStorage.getItem("cartQuantity"))) || 0;
const cartElement = document.querySelector(".js-cart-count");
updateCartQuantity();

function updateCartQuantity() {
    cartElement.innerHTML = cartQuantity;
}

document.querySelector(".cart").addEventListener("click", () => {
    localStorage.removeItem("cartQuantity");
    localStorage.removeItem("cart");
    cartElement.innerHTML = 0;
});