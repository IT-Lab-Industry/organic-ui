import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import images from '../../../../assets/img/images'

export default function Banner() {
  return (
    <section className="es_container">
      <div className="lg:container mx-auto grid grid-cols-10 gap-0 lg:gap-4 relative">
        <div className="col-span-12 rounded-xl bg-white border shadow-md">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="w-full h-[40vh] lg:h-[60vh] rounded-md overflow-hidden">
                <img
                  src={images.banner8}
                  alt=""
                  className="bg-cover w-full h-full rounded-md overflow-hidden"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full h-[40vh] lg:h-[60vh] rounded-md overflow-hidden">
                <img
                  src={images.banner7}
                  alt=""
                  className="bg-cover w-full h-full rounded-md overflow-hidden"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[40vh] lg:h-[60vh] rounded-md overflow-hidden">
                <img
                  src={images.banner9}
                  alt=""
                  className="bg-cover w-full h-full rounded-md overflow-hidden"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
