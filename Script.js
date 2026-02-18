function changeQty(change) {
  const qtyElement = document.getElementById("quantity");
  const priceElement = document.getElementById("total-price");

  let currentQty = parseInt(qtyElement.innerText);
  let newQty = currentQty + change;

  if (newQty >= 1) {
    qtyElement.innerText = newQty;

    let newTotal = newQty * 199;
    priceElement.innerText = newTotal;
  }
}

function removeProduct() {
  const cartLeft = document.querySelector(".cart-left");

  cartLeft.innerHTML = '<h1 class="your-bag">Your cart is empty!</h1';

  const priceElement = document.getElementById("total-price");
  if (priceElement) {
    priceElement.innerText = "0";
  }
}
