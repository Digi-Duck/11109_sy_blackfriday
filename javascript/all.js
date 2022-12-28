const burger = document.querySelector('.burger .fa-bars');
const mobileMenu = document.querySelector('#mobile-menu');
const cross = document.querySelector('.burger .fa-x')
const body = document.querySelector('body');
const tabs = document.querySelectorAll('#mobile-menu .navbar a');

burger.addEventListener('click', function() {
  mobileMenu.classList.add('active');
  body.style.overflow = 'hidden';
});
cross.addEventListener('click', function() {
  mobileMenu.classList.remove('active');
  body.style.overflow = 'auto';
});
tabs.forEach(function(item) {
  item.addEventListener('click', function(e) {
    // if(item.classList.contains('active')){
    //   e.preventDefault();
    //   return;
    // }
    mobileMenu.classList.remove('active');
    body.style.overflow = 'auto';
  });
});


function floatCloud(e) {

  let cloud = document.createElement('span');
  cloud.className = 'mousedownCloud';
  let x = e.offsetX;
  let y = e.offsetY;
  cloud.style.left = x+'px';
  cloud.style.top = y+'px';
  let size = Math.random() * 100;
  cloud.style.width = size+20+'px';
  cloud.style.height = size+20+'px';
  body.appendChild(cloud);
  // console.log(e);
  setTimeout(function() {
    cloud.remove();
  }, 1000);
}
window.addEventListener('mousedown', floatCloud);

