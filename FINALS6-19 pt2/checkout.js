const productContainer = document.querySelector(".products-container-storage");
productContainer.innerHTML = sessionStorage.getItem("cartItemsContainer");
updateCartTotal();
// price
function updateCartTotal() {
  var itemcontainers = document.querySelectorAll(".cart-flex");
  if (itemcontainers.length == 0) {
    document.querySelector(".cart-total-price").innerText = "P0";
  }
  for (let i = 0, total = 0; i < itemcontainers.length; i++) {
    var quantity = itemcontainers[i]
      .querySelector(".cart-quantity")
      .querySelector(".cart-quantity-input").value;
    var quantitycontainer = itemcontainers[i]
      .querySelector(".cart-quantity")
      .querySelector(".cart-quantity-input");
    var itemprice = parseInt(
      itemcontainers[i].querySelector(".cart-price").innerText.replace("P", "")
    );
    total = total + itemprice * quantity;
    document.querySelector(".cart-total-price").innerText = "P" + total;
    quantitycontainer.addEventListener("keyup", updateCartTotal);
  }
};