  const loading = document.querySelector('.loading');

  window.onload = function() {
    setTimeout(function() {
      loading.classList.add('end');
      body.style.overflow = 'auto';
      setTimeout(function() {
        loading.style.display = 'none';
        scroll();
      }, 300);
    }, 1000);
  }
  
  const nav = document.querySelector('#nav');
  const banner = document.querySelector('#banner');
  const cards = document.querySelectorAll('#main-card .card');
  const about = document.querySelector('#about');
  const around = document.querySelector('#around');
  
  function scroll() {
    if(scrollY > banner.offsetHeight) {
      nav.classList.add('fixed');
          document.body.style.paddingTop = nav.offsetHeight+'px';
    }else {
      nav.classList.remove('fixed');
      document.body.style.paddingTop = 0;
    }
    if(scrollY + 576 > about.offsetTop){
      about.querySelector('h2').classList.add('fade');
      about.querySelectorAll('.text p').forEach(text => {
        text.classList.add('fade');
      })
    }
    cards.forEach((item) => {
      if(scrollY+700 > item.offsetTop){
        item.querySelector('.pic').classList.add('fade');
        item.querySelector('.card-body').classList.add('opc');
        item.classList.add('topFade');
      }
    });
    if(scrollY + 600 > around.offsetTop){
      around.querySelector('.swiper').classList.add('fade');
    }
  }
  
  window.addEventListener('scroll', scroll);


  // Initialize Swiper
  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 1,
    // slideToClickedSlide: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


