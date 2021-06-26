let products_list;
let myStorage = window.localStorage;
let storedData = JSON.parse(myStorage.getItem('user'))


function logout() {
  window.localStorage.clear();
}

function showNav() {
  let nav = document.getElementById("nav_links");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

function createProductsDiv() {
  assignedDivs = document.getElementById("products_div");
  assignedDivs.remove();

  toAddDiv = document.getElementById("products_container");

  const parentDiv = document.createElement("div");
  parentDiv.className = "products_flex";
  parentDiv.id = "products_div";

  for (let i = 0; i < productsList.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "product";

    let newLinkTag = document.createElement("a");
    newLinkTag.href = productsList[i].linkURL;

    const newImgTag = document.createElement("img");
    newImgTag.src = productsList[i].imgURL;
    newLinkTag.append(newImgTag)

    let productName = document.createElement("p");
    productName.innerHTML = productsList[i].name;

    let productPrice = document.createElement("p");
    productPrice.innerHTML = productsList[i].price;
    productPrice.id = "product_price";

    newDiv.append(newLinkTag);
    newDiv.append(productName);
    newDiv.append(productPrice);
    parentDiv.appendChild(newDiv);
  }
  toAddDiv.appendChild(parentDiv);
}

function createAppleDiv() {
  productsList = appleProducts;
  createProductsDiv();
}

function createAndroidDiv() {
  productsList = androidProducts;
  createProductsDiv();
}

createAppleDiv()

if (storedData !== null){
  document.getElementById('user_icon').src = storedData.imageURL
  document.getElementById('login_but').style.display = 'none'
}else{
  document.getElementById('view_profile').style.display = 'none';
  document.getElementById('logout_btn').style.display = 'none';
}