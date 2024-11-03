import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

Swiper.use([Pagination])

const servicesPricesSwiper = new Swiper('.services-prices-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  mousewhell: true,
  keyboard: true
})

if (window.innerWidth >= 767) {
  servicesPricesSwiper.destroy()
}
