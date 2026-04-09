//cite: https://www.youtube.com/watch?v=UcrypywtAm0, and the videos Eveline shared on canvas, I also had support of google gemini.
let cart = JSON.parse(localStorage.getItem("aurea_cart")) || [];

function saveCart() {
  localStorage.setItem("aurea_cart", JSON.stringify(cart));
}

function addToCart(name, price, image) {
  let existingProduct = cart.find((item) => item.name === name);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ name: name, price: price, image: image, quantity: 1 });
  }
  saveCart();

  const popup = document.getElementById("popupMessage");
  if (popup) {
    popup.style.display = "flex";
    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);
  }
}

function updateCartUI() {
  const container = document.getElementById("cart-items-container");
  const totalPriceElement = document.getElementById("total-price");
  const itemCountElement = document.getElementById("item-count");
  const summarySubtotal = document.getElementById("summary-subtotal");

  if (!container) return;

  container.innerHTML = "";
  let totalSum = 0;

  if (cart.length === 0) {
    container.innerHTML = '<h1 class="your-bag">Your cart is empty!</h1>';
    if (totalPriceElement) totalPriceElement.innerText = "0";
    if (itemCountElement) itemCountElement.innerText = "0 Products";
    if (summarySubtotal) summarySubtotal.innerText = "0 SEK";
    return;
  }

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    totalSum += itemTotal;
    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" class="cart-img" />
        <div class="item-info">
          <p><strong>${item.name}</strong></p>
          <p>${item.price} SEK</p>
        </div>
        <div class="item-qty">
          <button onclick="changeQty(${index}, -1)" style="cursor: pointer">-</button>
          <span>${item.quantity}</span>
          <button onclick="changeQty(${index}, 1)" style="cursor: pointer">+</button>
        </div>
        <p>${itemTotal} SEK</p>
        <span onclick="removeProduct(${index})" style="cursor: pointer; font-size: 20px;">&times;</span>
      </div>
      <hr />
    `;
  });

  if (totalPriceElement) totalPriceElement.innerText = totalSum;
  if (summarySubtotal) summarySubtotal.innerText = totalSum + " SEK";
  if (itemCountElement) itemCountElement.innerText = cart.length + "Products";
}

function changeQty(index, change) {
  cart[index].quantity += change;
  if (cart[index].quantity < 1) {
    removeProduct(index);
  } else {
    saveCart();
    updateCartUI();
  }
}

function removeProduct(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
}

function changeImage(fileName) {
  let mainImg = document.getElementById("main-Img");
  if (mainImg) mainImg.src = fileName;
}

function removeProduct(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
}

function changeImage(fileName) {
  let mainImg = document.getElementById("main-Img");
  if (mainImg) mainImg.src = fileName;
}

document.addEventListener("DOMContentLoaded", updateCartUI);
