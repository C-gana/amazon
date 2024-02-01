/*
//let cartQuantity = Number(localStorage.getItem('cartQuantity')) || 0;
let cartQuantity = 0;
let timeOutId;
const buttonElement = document.querySelectorAll('.js-add-button');
const displayElement = document.querySelectorAll('.js-added-confirmation');
const quantityElement = document.querySelectorAll('.js-quantity');
const priceElement = document.querySelectorAll('.js-price');
const productNameElement = document.querySelectorAll('.js-product-name');
const productImageElement = document.querySelectorAll('.js-product-image');
const productImage = productImageElement;
let orders = [];
let cartQuantityCountHTML = document.querySelector('.js-cart-count');

//cart product information
const cartProducts = [];
//Display cart count onload
cartQuantityCountHTML.innerHTML = cartQuantity;

//add a product to the cart on click
buttonElement.forEach((value, i) => {
    // the product object containing all its details
    let product = {};
    product.name = productNameElement[i].innerText;
    product.quantity = Number(quantityElement[i].value);
    product.price = Number(priceElement[i].innerHTML) * 100;

    buttonElement[i].addEventListener('click',
        () => {
            const html = `<img src="images/icons/checkmark.png" alt="" />
    <p>Added</p>`;

            let productImageHTML = '';

            //clearing  last timeout Id to prevent delays with the previous one
            clearTimeout(timeOutId);

            if ((product.quantity + cartQuantity) <= 10) {
                cartQuantity += product.quantity;
                // localStorage.setItem('cartQuantity', String(cartQuantity));
                timeOutId = setTimeout(() => {
                    displayElement[i].innerHTML = '';
                }, 1000);
                displayElement[i].innerHTML = html;
                quantityElement[i].value = '1';
                orders.push(product);
                console.log(orders);
            } else {
                clearTimeout(timeOutId);
                alert(`The cart is full!\nYou cannot add more than 10 items`);
            }

            cartQuantityCountHTML.innerHTML = cartQuantity;


        }, 2000)

    if (productImage[i].classList.contains('product-image')) {
        productImage[i].classList.remove('product-image');
        productImageHTML = productImage[i].outerHTML;
        product.image = productImageHTML;
    }
});

*/