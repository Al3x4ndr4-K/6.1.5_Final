import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

Swiper.use([Pagination])

const brandsSwiper = new Swiper('.brands-swiper', {
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
  brandsSwiper.destroy()
}
