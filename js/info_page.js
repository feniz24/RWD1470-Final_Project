let nav = document.getElementById("user_box");
let infoBox = document.getElementById("information_box");
let infoItems = document.getElementsByClassName("info_item");
let cartBox = document.getElementById("cart_box");
let wishListBox = document.getElementById("wishlist_box");

function showNav() {
  if (nav.className === "navBox") {
    nav.className += " responsive";
  } else {
    nav.className = "navBox";
  }
}

function showInfo() {
  infoBox.style.display = "block";
  cartBox.style.display = "none";
  wishListBox.style.display = "none";
}

function showCart() {
  infoBox.style.display = "none";
  cartBox.style.display = "block";
  wishListBox.style.display = "none";
}

function showWishlist() {
  infoBox.style.display = "none";
  cartBox.style.display = "none";
  wishListBox.style.display = "block";
}

let myStorage = window.localStorage;
let storedData = JSON.parse(myStorage.getItem("user"));
let idTags = ["user_name", "user_addr", "user_country", "user_payment"];
let storedNames = [
  storedData.name,
  storedData.address,
  storedData.country,
  storedData.payment,
];

if (storedData !== null) {
  document.getElementById("profile_pic").src = storedData.imageURL;
  for (i = 0; i < idTags.length; i++) {
    document.getElementById(idTags[i]).innerHTML = storedNames[i];
  }
}
