import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'

export default function SourceByCategory({ CategoryWiseProducts, isLoading }) {
  const siteURL = `${import.meta.env.VITE_BASE_URL}`

  return (
    <section className="es_container py-8">
      <div className="bg-white shadow-md rounded-md -translate-y-32">
        <div className="flex items-center justify-between px-5 py-5">
          <p className="font-bold text-[18px] text-ftPrimaryColor uppercase">
            Source by category
          </p>
        </div>

        <div className="py-3 px-8">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <Swiper
              slidesPerView={9}
              spaceBetween={30}
              loop={true}
              navigation={false}
            >
              {CategoryWiseProducts?.sub_categories?.map(category => (
                <SwiperSlide key={category.id} className="bg-white rounded-md">
                  <Link to={`/category/${category.id}`}>
                    <div className="w-[120px] px-5 py-2">
                      <div className="w-full">
                        <img
                          src={siteURL + category?.image?.path}
                          alt={JSON.parse(category.name)['en']}
                          className="rounded-full border"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[#041826] text-[13px] uppercase font-medium">
                        {JSON.parse(category.name)['en']}
                      </h3>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  )
}
