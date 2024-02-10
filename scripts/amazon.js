let productsHTML = "";
let timeOutId;

products.forEach((product) => {
    const html = `
    <div class="product">
    <div class="product-image-container">
      <img
        class="product-image js-product-image"
        src="${product.image}"
        alt=""
      />
    </div>
    <div class="product-name js-product-name">
      ${product.name}
    </div>
    <div class="rating">
      <img class="stars" src="images/ratings/rating-${
        product.rating.stars * 10
      }.png" alt="" />
      <div class="voters">${product.rating.count}</div>
    </div>
    <div class="price">$<span class="js-price">${(
      product.priceCents / 100
    ).toFixed(2)}</span></div>
    <select class="js-quantity" name="quantity" id="">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
    <div class="js-added-confirmation added-confirmation"></div>
    <button class="js-add-button add-button"
      data-product-id="${product.id}"
    >Add to Cart</button>
  </div>
  `;

    productsHTML += html;
});

document.querySelector(".js-products").innerHTML = productsHTML;

//making the add button interactive and adding products to cart
document.querySelectorAll(".js-add-button").forEach((button, i) => {
    button.addEventListener("click", () => {
        //getting the product id from the dataset attribute
        const productId = button.dataset.productId;
        const quantityElement = document.querySelectorAll(".js-quantity");
        const displayElement = document.querySelectorAll(".js-added-confirmation");
        let displayAddConfirmation = displayElement[i];
        const quantity = Number(quantityElement[i].value);
        const html = `<img src="images/icons/checkmark.png" alt="" /> <p>Added</p>`;
        let matchingItem;

        // checking the cart if a product is already there
        cart.forEach((item) => {
            if (productId === item.productId) {
                matchingItem = item;
            }
        });

        if (matchingItem) {
            matchingItem.quantity += quantity;
        } else {
            cart.push({
                productId: productId,
                quantity: quantity,
            });
        }

        //updating the cart quantity in both the cartQuantity variable and cart DOM
        cartQuantity += quantity;
        //storing the cart in the local storage
        localStorage.setItem("cartQuantity", JSON.stringify(cartQuantity));
        updateCartQuantity();

        // the added confirmation message
        //clearing  last timeout Id to prevent delays with the previous one
        clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
            displayAddConfirmation.innerHTML = "";
        }, 900);
        displayAddConfirmation.innerHTML = html;
    });
});