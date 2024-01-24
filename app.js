




document.addEventListener("DOMContentLoaded", function () {
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
  
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      loop: true,
      speed:1000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        autoplayTimeLeft: function (s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        },
      },
    });
  });
  
  
  
  // header search
  const dropBtn = document.getElementById('search-bar');
  const searchDropDown = document.getElementById('all-departments-drop');
  
  dropBtn.addEventListener('click',function(){
    dropBtn.classList.toggle("ri-close-line");
    searchDropDown.classList.toggle('none')
  })
  
  
  
  // checkout btn
 function checkO (){
  window.location.href = 'checkout.html'
}
  
  
// color 
const colorsContainer = document.querySelector('.product-colors');

colorsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('color')) {
        const elements = document.querySelectorAll('.product-colors .color');
        elements.forEach((each) => {
            each.classList.remove('active');
        });
        event.target.closest('.color').classList.add('active');
    }
});


// size 
 const productSizeList = document.querySelectorAll('.size');
 for(i=0;i<productSizeList.length;i++){
  let element = productSizeList[i];

  element.addEventListener('click',function(){
    for(j=0;j<productSizeList.length;j++){
      productSizeList[j].classList.remove('active');
    }
    element.classList.toggle('active')
  })
 }
 
 
 
 
//  plus icon

const plusIcons = document.querySelectorAll('.datiles-item .plus-icon');
const detailsBoxs = document.querySelectorAll('.datiles-item .datiles-box');

for(let i=0; i<plusIcons.length; i++){
   const  eachIcon = plusIcons[i];
  eachIcon.addEventListener('click',function (event) {
    let closeBox = detailsBoxs[i]
    closeBox.classList.toggle('closeBox')
  })
}



// big image
const bigImage = document.getElementById('big-image');
const smallImgs = document.querySelectorAll('.small-img');

smallImgs.forEach((eachImg)=>{
  eachImg.addEventListener('click',function(event){
    bigImage.src = eachImg.src
  })
})


// quantity input 
const quantityInput = document.querySelector('#quintityInput');
const plusBtn = document.querySelector('#quantityPlus')
const minusBtn = document.querySelector('#quantityMinus')


const updateQuintity = (operation) =>{
  let currentValue = parseInt(quantityInput.value);
  
  if(operation === 'plus' && currentValue<5){
    currentValue++;
  }
  else if(operation === 'minus' && currentValue>1){
    currentValue--;
  }
  quantityInput.value = currentValue;
}


function addEvent (BtnId,operation){
  BtnId.addEventListener('click',function(){
    updateQuintity(operation)
  })
}

addEvent(plusBtn,'plus')
addEvent(minusBtn,'minus')





// top-header-menu



function topHederToggle(){
  let topHeaderMenu  = document.getElementById('top-header-menu')
  let topHeaderMenuATag = topHeaderMenu.querySelector('a');
  let topRightHeader = document.getElementById('top-right-header')
  
  topRightHeader.classList.toggle('header-top-right-toggle')
  topHeaderMenuATag.classList.toggle("ri-close-fill")
}


function bottomHeaderToggle(){
  let bottomHeaderRight = document.getElementById('header-bottom-right');
  let bottomHeaderMenu = document.getElementById('bottom-header-menu');
  let bottomHeaderMenuATag = bottomHeaderMenu.querySelector('a');
  
  bottomHeaderRight.classList.toggle('bottom-hedaer-right-toggle')
  bottomHeaderMenuATag.classList.toggle("ri-close-fill")
}