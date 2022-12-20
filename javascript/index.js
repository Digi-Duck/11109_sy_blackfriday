  const nav = document.querySelector('#nav');
  const banner = document.querySelector('#banner');
  const cards = document.querySelectorAll('#main-card .card')
  
  function scroll() {
    if(scrollY+80 > banner.offsetHeight) {
      nav.classList.add('fixed');
      // document.body.style.paddingTop = nav.offsetHeight+'px';
    }else {
      nav.classList.remove('fixed');
      // document.body.style.paddingTop = 0;
    }

    cards.forEach((item) => {
      console.log(scrollY, item.offsetTop);
      
      if(scrollY+500 > item.offsetTop){
        item.querySelector('.pic').classList.add('fade');
        item.querySelector('.card-body').classList.add('opc');
        item.classList.add('topFade');
      }
    })
  }
  scroll();
  window.addEventListener('scroll', scroll)


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



 



  const imgBox = document.querySelectorAll('.imgBox');
  const bannerImg = document.querySelector('#banner');

  imgBox.forEach(function(item,index,array) {
    imgBox[index].addEventListener('click',  function() {
      // array.forEach((it,key) => {
      //   console.log(it.getAttribute('class'));
      //   if(it.getAttribute('class') == 'imgBox active'){
      //     console.log(key);
      //       it.style.setProperty('--i', key);
      //       console.log(it);
      //     }
      // });
      for(let i = 0; i < imgBox.length; i++){
        imgBox[i].className = 'imgBox';
        
      }

      this.className = 'imgBox active';
      // this.style.setProperty('--i', 1);
      
      bannerImg.style.setProperty('background-image', `url('${this.querySelector('img').getAttribute('src')}')`)
    });
  });
  