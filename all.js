  
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
  const cards = document.querySelectorAll('#main-card .card')
  
  function scroll() {
    if(scrollY+80 > banner.offsetHeight) {
      nav.classList.add('fixed');
    }else {
      nav.classList.remove('fixed');
    }
    cards.forEach((item) => {
      console.log(scrollY, item.offsetTop);
      
      if(scrollY+500 > item.offsetTop){
        item.querySelector('.pic').classList.add('fade');
        item.querySelector('.card-body').classList.add('opc');
      }
    })
  }
  scroll();
  window.addEventListener('scroll', scroll)



  const imgBox = document.querySelectorAll('.imgBox');
  const bannerImg = document.querySelector('#banner');

  imgBox.forEach(function(item,index) {
    imgBox[index].addEventListener('click',  function() {
      for(let i = 0; i < imgBox.length; i++){
        imgBox[i].className = 'imgBox';
      }
      this.className = 'imgBox active';
      bannerImg.style.setProperty('background', `url('${this.querySelector('img').getAttribute('src')}')`)
      console.log(this.querySelector('img').getAttribute('src'));
    })
  })
  let x = 0;
  setInterval(function() {
    
  })
