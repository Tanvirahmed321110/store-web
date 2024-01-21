




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