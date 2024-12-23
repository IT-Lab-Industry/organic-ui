import React, { useRef } from 'react'
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
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useGetBrandQuery } from '../../../../redux/features/api/brand/brandApi'
import { baseURL } from '../../../../utils/imagesURL'

export default function TopBrand() {
  const { data: brand, isLoading } = useGetBrandQuery()
  const brands = brand?.brands
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

  if (isLoading) {
    return <>Loading...</>
  }
  const lang = 'en'

  return (
    <section className="es_container py-8 px-[10px]">
      <div className="bg-white rounded-md shadow-md px-7 py-4 flex justify-between items-center">
        <div className="top_brandheadding">
          <p className="text-black text-[16px] font-semibold uppercase leading-6">
            TopBrand
          </p>
        </div>

        <div className="category_arrow flex gap-2">
          <button
            className=" slick-prev slick-arrow border px-3 py-3 rounded"
            aria-label="Previous"
            type="button"
            onClick={goToPrevSlide}
          >
            <IoIosArrowBack />
          </button>
          <button
            className="slick-next slick-arrow border px-3 py-3 rounded"
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
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
          }}
        >
          {brands?.map(brand => (
            <SwiperSlide key={brand.id} className="bg-white rounded-md ">
              <Link to={'/top-brand/1'}>
                <div className="px-3 py-2">
                  <div className="w-full ">
                    <img
                      src={baseURL + '/' + brand?.image?.path}
                      alt={brand.title}
                    />
                  </div>
                  <div>
                    <h3 className="text-[#041826] text-[13px] mt-1 uppercase font-medium">
                      {JSON.parse(brand?.name)[lang]}
                    </h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
