import React, { useRef } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {
  Navigation,
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
} from 'swiper/modules'
import { Link } from 'react-router-dom'
import images from '../../../../assets/img/images'

export default function SourceByStyle() {
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
  const sourceByStyle = [
    {
      id: 1,
      name: 'Vacation',
      image: images.categoryTShirt2,
    },
    {
      id: 2,
      name: 'Vacation',
      image: images.categoryTShirt2,
    },
    {
      id: 3,
      name: 'Vacation',
      image: images.categoryTShirt2,
    },
    {
      id: 4,
      name: 'Vacation',
      image: images.categoryTShirt4,
    },
    {
      id: 5,
      name: 'Vacation',
      image: images.categoryTShirt5,
    },
    {
      id: 6,
      name: 'Vacation',
      image: images.categoryTShirt6,
    },
    {
      id: 7,
      name: 'Vacation',
      image: images.sourceByCategory3,
    },
    {
      id: 8,
      name: 'Vacation',

      image: images.games,
    },
    {
      id: 8,
      name: 'Vacation',
      image: images.furniture,
    },
    {
      id: 8,
      name: 'Vacation',
      image: images.mobile,
    },
    {
      id: 8,
      name: 'Vacation',
      image: images.vegetables,
    },
  ]
  return (
    <section className="es_container">
      <div className="bg-white shadow-md rounded-md -translate-y-32">
        <div className="flex items-center justify-between px-5 py-5">
          <p className="text-ftPrimaryColor text-[16px] font-semibold uppercase leading-6">
            source bt Style
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

        <div className="py-3 px-8 ">
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
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
          >
            {sourceByStyle.map(brand => (
              <SwiperSlide
                key={brand.id}
                className="rounded-md border p-1 mb-2"
              >
                <Link to={'/category/1'}>
                  <div className=" px-2 py-2">
                    <div className="w-full bg-[#0000000a] rounded-md">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="bg-[#0000000a]  rounded-md"
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <h3 className="text-[#041826] text-[15px] uppercase font-bold">
                      {brand.name}
                    </h3>
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
