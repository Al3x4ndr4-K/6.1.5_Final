import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

Swiper.use([Pagination])

const devicesSwiper = new Swiper('.devices-swiper', {
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
  devicesSwiper.destroy()
}
