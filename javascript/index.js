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

  const topLayer = banner.querySelector('.top');
  const handle = banner.querySelector('.handle');
  let skew = 1000;
  let delta = 0;

  const cloud = banner.querySelector('.moveCloud');

  function mouseCloud(e) {
    // console.log(e.clientX - window.innerWidth / 2);
    let moveX = (e.clientX - window.innerWidth / 2) * 0.03;
    let moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    cloud.style.transform = `translate3D(-${moveX}px,${moveY}px,${moveY}px)`
  }
  banner.addEventListener('mousemove', mouseCloud);
  banner.addEventListener('touchmove',mouseCloud); 
   // if(banner.className.indexOf('skewed') != -1){
  //   skew = 1000;
  // }

  // banner.addEventListener('mousemove', function(e) {
    // delta = (e.clientX);
    // console.log(delta, window.innerWidth);
    // handle.style.left = e.clientX + delta + 'px';
    // topLayer.style.width = e.clientX + skew + delta + 'px';

    // console.log(e.pageY,banner.offsetHeight);
    // topLayer.style.height = ((e.pageY-80)/banner.offsetHeight) * 100 + '%';


  // });





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


