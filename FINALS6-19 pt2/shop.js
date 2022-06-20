 var addcartbutton = document.getElementsByClassName("btn");

for (let i = 0; i < addcartbutton.length; i++) {
  addcartbutton[i].addEventListener("click", function () {
    var addcart = document.querySelector(".cart-items");
    var addchildcart = document.createElement("div");
    var img = addcartbutton[i].parentElement.querySelector(".img").src;
    var title =
      addcartbutton[i].parentElement.querySelector(".productName").innerText;
    var price =
      addcartbutton[i].parentElement.querySelector(".price").innerText;
    addchildcart.innerHTML = `
    <div class="cart-flex">
	    <div class="cart-item cart-column">
	      <img class="cart-item-image" src="${img}" width="100" height="100">
	      <span class="cart-item-title">${title}</span>
	    </div>
	    <span class="cart-price cart-column">${price}</span>
	    <div class="cart-quantity cart-column">
	     <input class="cart-quantity-input" type="number" value="1">
	      <button class="btn btn-danger" type="button">REMOVE</button>
	    </div>
    </div>`;
    addcart.append(addchildcart);
    updateCartTotal();
    var cartitembtndanger = document.querySelectorAll(".btn-danger");

    for (let i = 0; i < cartitembtndanger.length; i++) {
      cartitembtndanger[i].addEventListener("click", function () {
        cartitembtndanger[i].parentElement.parentElement.remove();
        updateCartTotal();
      });
    }
  });
}
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
//for checkout

const checkoutBtn = document.querySelector(".check");
const cartItemsContainer = document.querySelector(".cart-items");

checkoutBtn.addEventListener("click",() => {
	if(cartItemsContainer.innerHTML == "") {
		alert("Your cart is empty!");
	} else {
		sessionStorage.setItem("cartItemsContainer", cartItemsContainer.innerHTML);
		location.href= "CHECKOUT.html";
	}
});






