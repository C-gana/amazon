const orderElement = document.querySelector(".js-orders");
const orderCostElement = document.querySelector(".js-order-cost");
let ordersHTML = "";
let costCents = 0;
let totalCost;

//looping through the cart to find products in it and generate the HTML
cart.forEach((item) => {
    let matchingProduct;
    let quantity;
    let itemCost;

    // finding the product in the cart
    products.forEach((product) => {
        if (product.id === item.productId) {
            matchingProduct = product;
            quantity = item.quantity;
        }
    });

    // generating the html for the products in the cart
    const html = `
      <div class="order-product-details">
      <img class="prod-image" src="${matchingProduct.image}" alt="" />
      <div class="order-details">
        <div class="prod-name">
          <b>${matchingProduct.name}</b>
        </div>
        <div class="arriving-date">Arriving: August 15</div>
        <div class="order-quantity">Quantity: ${quantity}</div>
        <button class="buy-again-button">
          <img
          class="buy-icon"
          src="images/icons/buy-again.png"
          alt=""
          />
          Buy it again
        </button>
      </div>
      <button class="track-button">
        <a href="" id="track">Track package</a>
      </button>
      </div>
    `;

    // calculating the total cost of all items added into the cart
    itemCost = matchingProduct.priceCents * quantity;
    costCents += itemCost;
    totalCost = (costCents / 100).toFixed(2);

    //compiling the cart items together, ready to be put on the DOM
    ordersHTML += html;
    //putting the html on the DOM
    orderCostElement.innerHTML = `$${totalCost}`;
    orderElement.innerHTML = ordersHTML;
});