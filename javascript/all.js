const burger = document.querySelector('.burger .fa-bars');
const mobileMenu = document.querySelector('#mobile-menu');
const cross = document.querySelector('.burger .fa-x')
const body = document.querySelector('body');

burger.addEventListener('click', function() {
  mobileMenu.classList.add('active');
  body.style.overflow = 'hidden';
});
cross.addEventListener('click', function() {
  mobileMenu.classList.remove('active');
  body.style.overflow = 'auto';
})

const nav = document.querySelector('#nav');
const banner = document.querySelector('#banner');

window.addEventListener('scroll', function() {
  if(scrollY+80 > banner.offsetHeight) {
    nav.classList.add('fixed');
    // document.body.style.paddingTop = nav.offsetHeight+'px';
  }else {
    nav.classList.remove('fixed');
    // document.body.style.paddingTop = 0;
  }
})