
let cart = JSON.parse(localStorage.getItem("cart"));
let parent = document.getElementById('products')


let total = document.getElementById("total");
let code = document.getElementById("code");
let totalamount = document.getElementById("totalamount");
var sum = 0
function showProducts() {

  cart.forEach(function (products) {

    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = products.img;

    img.style.width = 150 + "px";
    let price = document.createElement("p");
    price.textContent = "Rs. "+products.price;
price.style.color="red"
    let name = document.createElement("p");
    name.textContent = products.name;

    div.append(img, name, price)
    parent.append(div);

    sum += products.price
  });
  total.textContent = "Total Amount Rs."+(Math.floor(sum))
}

showProducts()


function promocode() {
  console.log(code.value)
  if (code.value == "sasta30") {
    total.textContent = "Total Amount Rs."+Math.floor(sum-(sum*.3))
  }
  else{
    alert("Invalid Promo Code")
  }
}
