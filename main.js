const menuEmial = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const sandwichMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartMenu = document.querySelector(".navbar-shopping-cart");
const cartDetail = document.querySelector(".cart-detail");
const cardsContainer = document.querySelector(".cards-container");
const products = document.querySelector(".product-card");
const productDetail = document.querySelector(".product-detail");
const productDetailClose = document.querySelector(".product-detail-close");

menuEmial.addEventListener('click', toggleDesktopMenu);
sandwichMenu.addEventListener('click', toggleMobileMenu);
cartMenu.addEventListener('click', toggleCartMenu);
productDetailClose.addEventListener('click', addInactiveClass_procutDetail);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
  cartDetail.classList.add('inactive');
  productDetail.classList.add('inactive');
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  desktopMenu.classList.add('inactive');
  cartDetail.classList.add('inactive');
  productDetail.classList.add('inactive');
}

function toggleCartMenu() {
  cartDetail.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetail.classList.add('inactive');
}

function toggleProductDetail() {
  productDetail.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
  cartDetail.classList.add('inactive');
  desktopMenu.classList.add('inactive');
}

function addInactiveClass_procutDetail() {
  productDetail.classList.add('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}
)
productList.push({
  name: 'Computer',
  price: 320,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}
)
productList.push({
  name: 'Car',
  price: 12_000,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}
)


function renderProducts (arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImg = document.createElement('img');
    productImg.addEventListener('click', toggleProductDetail);
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info-container');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
  
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    productInfoFigure.appendChild(productImgCart);
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
}
}

renderProducts(productList);