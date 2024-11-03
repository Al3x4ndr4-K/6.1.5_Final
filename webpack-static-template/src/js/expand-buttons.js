// Main expand button

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleButton')
  const container = document.querySelector('.service__description-container')
  const buttonText = toggleButton.querySelector(
    '.service__description_expand-text'
  )

  toggleButton.addEventListener('click', function () {
    container.classList.toggle('expanded')
    toggleButton.classList.toggle('expanded')
    if (container.classList.contains('expanded')) {
      buttonText.textContent = 'Скрыть'
    } else {
      buttonText.textContent = 'Читать далее'
    }
  })
})

// Brands services expand button

const descriptionContinueButton = document.querySelector(
  '.brands-services__description-continue-button'
)
const slidesBrands = document.querySelectorAll('.brands-services__slide')

descriptionContinueButton.addEventListener('click', () => {
  if (descriptionContinueButton.classList.contains('show-less')) {
    slidesBrands.forEach((slide, index) => {
      slide.style.display = 'flex'
    })
    slidesBrands.forEach((slide, index) => {
      if (index >= 6 && window.innerWidth < 1119) {
        slide.style.display = 'none'
      } else if (index >= 8 && window.innerWidth >= 1119) {
        slide.style.display = 'none'
      }
    })
    descriptionContinueButton.classList.remove('show-less')
  } else {
    slidesBrands.forEach((slide, index) => {
      if (index >= 6 && window.innerWidth < 1119) {
        slide.style.display = 'flex'
      } else if (index >= 8 && window.innerWidth >= 1119) {
        slide.style.display = 'flex'
      }
    })
    descriptionContinueButton.classList.add('show-less')
  }
})


const devicesContinueButton = document.querySelector(
  '.devices-services__description-continue-button'
)
const slidesDevices = document.querySelectorAll('.devices-services__slide')

devicesContinueButton.addEventListener('click', () => {
  if (devicesContinueButton.classList.contains('show-less')) {
    slidesDevices.forEach((slide, index) => {
      slide.style.display = 'flex'
    })
    slidesDevices.forEach((slide, index) => {
      if (index >= 3 && window.innerWidth < 1000) {
        slide.style.display = 'none'
      } else if (index >= 4 && window.innerWidth >= 1000) {
        slide.style.display = 'none'
      }
    })
    devicesContinueButton.classList.remove('show-less')
  } else {
    slidesDevices.forEach((slide, index) => {
      if (index >= 3 && window.innerWidth < 1000) {
        slide.style.display = 'flex'
      } else if (index >= 4 && window.innerWidth >= 1000) {
        slide.style.display = 'flex'
      }
    })
    devicesContinueButton.classList.add('show-less')
  }

  // показать кнопку "Показать еще"
  if (slidesDevices.length > 3) {
    devicesContinueButton.style.display = 'flex'
  } else {
    devicesContinueButton.style.display = 'none'
  }
})
