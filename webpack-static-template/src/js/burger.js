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

