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

