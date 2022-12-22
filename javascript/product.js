const nav = document.querySelector('#nav');
const banner = document.querySelector('#product-banner');

function scroll() {
  if(scrollY+80 > banner.offsetHeight) {
    nav.classList.add('fixed');
    // document.body.style.paddingTop = nav.offsetHeight+'px';
  }else {
    nav.classList.remove('fixed');
    // document.body.style.paddingTop = 0;
  }
}
scroll();
window.addEventListener('scroll', scroll);

const breadBtns = document.querySelectorAll('#product .bread div');
const fruitBtns = document.querySelectorAll('#product .fruit div');
const coffeeBtns = document.querySelectorAll('#product .coffee div');
const bounce = document.querySelector('#bounce');
const types = document.querySelectorAll('#bounce [data-type]')


// function scrollBan() {
//   window.addEventListener('wheel', function(e) {
//     e.preventDefault();
//   })
// }



breadBtns.forEach(function(item) {
  item.addEventListener('click', function() {
    types.forEach(type => {
      type.classList.add('d-none')
      if(type.dataset.type == 'bread'){
        type.classList.remove('d-none')
      }
    });
    bounce.classList.add('active');
    body.style.overflow = 'hidden';
    // html.classList.add('noscroll');
    // html.preventDefault();
    // scrollBan();
  })
})
fruitBtns.forEach(function(item) {
  item.addEventListener('click', function(e) {

    types.forEach(type => {
      type.classList.add('d-none')
      if(type.dataset.type == 'fruit'){
        type.classList.remove('d-none')
      }
    });
    bounce.classList.add('active');
    body.style.overflow = 'hidden';
    
  })
})
coffeeBtns.forEach(function(item) {
  item.addEventListener('click', function(e) {

    types.forEach(type => {
      type.classList.add('d-none')
      if(type.dataset.type == 'coffee'){
        type.classList.remove('d-none')
      }
    });
    bounce.classList.add('active');
    body.style.overflow = 'hidden';
  })
})
window.addEventListener('click', function(e) {
  // console.log(e.target.getAttribute('id'));
  if(e.target.getAttribute('id') == 'bounce'){
    bounce.classList.remove('active');
    body.style.overflow = 'auto';
    html.classList.remove('noscroll');
    // body.style.paddingRight = '0px';
  }
});
