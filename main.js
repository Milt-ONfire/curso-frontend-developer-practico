const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHam = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHam.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu(){  
   const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
 
   if(!isshoppingCartContainerClosed){
      shoppingCartContainer.classList.add('inactive');
   }
   desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
   const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
   const isProductDetailAsideClosed = productDetailContainer.classList.contains('inactive');
 
   if(!isshoppingCartContainerClosed){
      shoppingCartContainer.classList.add('inactive');
   }

   if(!isProductDetailAsideClosed){
      productDetailContainer.classList.add('inactive');
   }

   mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
   const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
   const isProductDetailAsideClosed = productDetailContainer.classList.contains('inactive');
   
   if(!isMobileMenuClosed){
      mobileMenu.classList.add('inactive');
   }

   if(!isDesktopMenuClosed){
      desktopMenu.classList.add('inactive');
   }

   if(!isProductDetailAsideClosed){
      productDetailContainer.classList.add('inactive');
   }

   shoppingCartContainer.classList.toggle('inactive');


}

function openProductDetailAside(){
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
   const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

   if(!isMobileMenuClosed){
      mobileMenu.classList.add('inactive');
   }

   if(!isshoppingCartContainerClosed){
      shoppingCartContainer.classList.add('inactive');
   }

   productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
   productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
   name:'Pantalla',
   price: 220,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
   name:'Computador',
   price: 300,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
   name:'Bike',
   price: 120,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr){
for (product of arr){
 const productCard = document.createElement('div');
 productCard.classList.add('product-card');
 
 const productImg = document.createElement('img');
 productImg.setAttribute('src', product.image);

 productImg.addEventListener('click', openProductDetailAside);

 const productInfo = document.createElement('div');
 productInfo.classList.add('product-info');

 const productInfoDiv = document.createElement('div');

 const productPrice = document.createElement('p');
 productPrice.innerText = '$' + product.price;

 const productName = document.createElement('p');
 productName.innerText = product.name;

 productInfoDiv.appendChild(productPrice);
 productInfoDiv.appendChild(productName);

 const productFigure = document.createElement('figure');
 const productImgCard = document.createElement('img');
 productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');

 productFigure.appendChild(productImgCard);

 productInfo.appendChild(productInfoDiv);
 productInfo.appendChild(productFigure);

 productCard.appendChild(productImg);
 productCard.appendChild(productInfo);

 cardsContainer.appendChild(productCard);
}



}

renderProducts(productList);