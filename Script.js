//cite: https://www.youtube.com/watch?v=YeFzkC2awTM - jag tog inspiration från youtubevideon och fick lite hjälp av google gemini till vissa delar jag inte förstod mig på//
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

function changeImage(fileName) {
  let mainImg = document.getElementById("main-Img");
  mainImg.src = fileName;
}

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".add-to-cart-large");
  const popup = document.getElementById("popupMessage");

  if (!btn) console.log("Knappen hittades inte");
  if (!popup) console.log("Popup hittades inte");

  btn?.addEventListener("click", () => {
    popup.style.display = "flex";

    setTimeout(() => {
      popup.style.display = "none";
    }, 5000);
  });
});
