burgerOverlay = document.querySelector('.burger__overlay')
burgerHeaderButton = document.querySelector('.header__burger-button')
burger = document.querySelector('.burger')
burgerCloseButton = document.querySelector('.burger__burger-button')

// burgerHeaderButtonClose =

burgerHeaderButton.addEventListener('click', function () {
  burger.classList.toggle('show-burger')
  burger.classList.toggle('hide-burger');
  burgerOverlay.classList.toggle('show-burger-overlay')
})

burgerCloseButton.addEventListener('click', function () {
  burger.classList.toggle('show-burger')
  burger.classList.toggle('hide-burger');
  burgerOverlay.classList.toggle('show-burger-overlay')
})

document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');

  function handleScroll() {
    if (window.innerWidth >= 1120) {
      let scrollTop = window.scrollY;
      burger.style.top = scrollTop + 'px';
    } else {
      burger.style.top = '';
    }
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);

  handleScroll();
});