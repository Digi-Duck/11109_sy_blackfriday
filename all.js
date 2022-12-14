  
  // Initialize Swiper
  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 1,
    // slideToClickedSlide: true,
    coverflowEffect: {
      rotate: 5,
      stretch: 0,
      depth: 120,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  const nav = document.querySelector('#nav');
  const banner = document.querySelector('#banner');

  window.addEventListener('scroll', function(e) {
    if(scrollY+80 > banner.offsetHeight) {
      nav.classList.add('fixed');
    }else {
      nav.classList.remove('fixed');
    }
  })