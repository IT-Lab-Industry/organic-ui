import React, { useRef } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'
import images from '../../../../assets/img/images'
import {
  Navigation,
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
} from 'swiper/modules'

export default function TopCategories() {
  const swiperRef = useRef(null)

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const topCategory = [
    {
      id: 1,
      name: 'Dashboard',
      image: images.dashboard,
    },
    {
      id: 2,
      name: 'Electronics',
      image: images.electrongc,
    },
    {
      id: 3,
      name: 'Baby',
      image: images.babycare,
    },
    {
      id: 4,
      name: 'Decor',
      image: images.decor,
    },
    {
      id: 5,
      name: 'Digital',
      image: images.digital,
    },
    {
      id: 6,
      name: 'Drinks',
      image: images.drinks,
    },
    {
      id: 7,
      name: 'Fashion',
      image: images.fashion,
    },
    {
      id: 8,
      name: 'Sports',

      image: images.games,
    },
    {
      id: 9,
      name: 'Sports',
      image: images.furniture,
    },
    {
      id: 10,
      name: 'Sports',
      image: images.mobile,
    },
    {
      id: 11,
      name: 'Sports',
      image: images.vegetables,
    },
  ]

  return (
    <section className="es_container py-8 px-[10px]">
      <div className="bg-white px-3 py-3 rounded-xl shadow">
        <div className="flex items-center justify-between px-5 py-2">
          <p className="text-black text-[16px] font-bold uppercase">
            TOP CATEGORIES
          </p>
          <div className="category_arrow flex gap-2">
            <button
              className="slick-prev slick-arrow border px-2 py-3 rounded"
              aria-label="Previous"
              type="button"
              onClick={goToPrevSlide}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="slick-next slick-arrow border px-2 py-3 rounded"
              aria-label="Next"
              type="button"
              onClick={goToNextSlide}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        <div className="py-5">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Scrollbar, Autoplay, Keyboard]}
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 8,
                spaceBetween: 20,
              },
            }}
          >
            {topCategory.map(brand => (
              <SwiperSlide key={brand.id} className="bg-white rounded-md ">
                <Link to={'/category/1'}>
                  <div className="w-[150px] px-5 py-2 group cursor-pointer">
                    <div className="w-full ">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="hover:transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="text-[#041826] mt-4 text-[13px] uppercase font-medium hover:transform group-hover:scale-110 transition-transform duration-300">
                        {brand.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
