let productsHTML = '';

products.forEach((product) => {
    const html = `
  <div class="product">
  <img
    class="product-image js-product-image"
    src="${product.image}"
    alt=""
  />
  <div class="product-name js-product-name">
    ${product.name}
  </div>
  <div class="price">$<span class="js-price">${(product.price)}</span></div>
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
  <button class="js-add-button add-button">Add to Cart</button>
</div>
  `;

    productsHTML += html;
});

document.querySelector('.js-products').innerHTML = productsHTML;