// Feedback show

const feedbackAside = document.querySelector('.feedback_full')
const burgerChatButton = document.querySelector('.burger-footer__chat-button')
const feedbackAsideCloseButton = document.querySelector('#feedback_close')
const feedbackOverlay = document.querySelector('.feedback__overlay')
const headerChatButton = document.querySelector('.header__chat-button')

burgerChatButton.addEventListener('click', () => {
  feedbackAside.classList.toggle('show-feedback')
  feedbackAside.classList.toggle('show-feedback-animated')
  feedbackOverlay.classList.toggle('show-feedback')
})

headerChatButton.addEventListener('click', () => {
  feedbackAside.classList.toggle('show-feedback')
  feedbackAside.classList.toggle('show-feedback-animated')
  feedbackOverlay.classList.toggle('show-feedback')
})

feedbackAsideCloseButton.addEventListener('click', () => {
  feedbackAside.classList.toggle('show-feedback')
  feedbackAside.classList.toggle('show-feedback-animated')
  feedbackOverlay.classList.toggle('show-feedback')
})

// Tel-only show

const telAside = document.querySelector('.tel-only')
const burgerPhoneButton = document.querySelector('.burger-footer__phone-button')
const telOnlyCloseButton = document.querySelector('#tel-only_close')
const telOverlay = document.querySelector('.tel__overlay')
const headerPhoneButton = document.querySelector('.header__phone-button')

burgerPhoneButton.addEventListener('click', () => {
  telAside.classList.toggle('show-tel')
  telAside.classList.toggle('show-feedback-animated')
  telOverlay.classList.toggle('show-tel')
})

headerPhoneButton.addEventListener('click', () => {
  telAside.classList.toggle('show-tel')
  telAside.classList.toggle('show-feedback-animated')
  telOverlay.classList.toggle('show-tel')
})

// Tel-only close cross-button

telOnlyCloseButton.addEventListener('click', () => {
  telAside.classList.toggle('show-tel')
  telAside.classList.toggle('show-feedback-animated')
  telOverlay.classList.toggle('show-tel')
})
