import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import images from '../../../../assets/img/images'
import { Link } from 'react-router-dom'

export default function CategorySlider() {
  const categorySlider = [
    {
      id: 1,
      image: images.categorySlider1,
    },
    {
      id: 2,
      image: images.categorySlider2,
    },
    {
      id: 3,
      image: images.categorySlider3,
    },
    {
      id: 4,
      image: images.categorySlider4,
    },
    {
      id: 5,
      image: images.categorySlider2,
    },
  ]
  return (
    <section className="es_container -translate-y-20 ">
      <div className="bg-white rounded-md shadow-md">
        <div className=" ">
          <Swiper slidesPerView={1} loop={true} navigation={false}>
            {categorySlider.map(brand => (
              <SwiperSlide key={brand.id} className="rounded-md border">
                <Link to={'/category/1'}>
                  <div>
                    <div className="w-full bg-[#0000000a] rounded-md">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="bg-[#0000000a] lg:h-[250px] h-[150px] bg-cover object-cover bg-no-repeat w-full rounded-md"
                      />
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
