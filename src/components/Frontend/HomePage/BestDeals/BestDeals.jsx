import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'
import './BestDeals.css'
import images from '../../../../assets/img/images'
import Button from '../../../../common/Button/Button'
import { useState } from 'react'

export default function BestDeals() {
  const [hoveredImage, setHoveredImage] = useState(null)
  const products = [
    {
      id: 1,
      name: 'MSI 27" 170 Hz VA WQHD Gaming Monitor FreeSync Premium (AMD Adaptive Sync) 2560 x 1440 (2K) 91% DCI-P3 / 114% sRGB G27CQ4 E2',
      price: '$100',
      image: images.featureproduct1,
    },
    {
      id: 2,
      name: 'PMSI 27" 170 Hz VA WQHD Gaming Monitor FreeSync Premium (AMD Adaptive Sync) 2560 x 1440 (2K) 91% DCI-P3 / 114% sRGB G27CQ4 E2',
      price: '$150',
      image: images.featureproduct2,
    },
    {
      id: 3,
      name: 'MSI 27" 170 Hz VA WQHD Gaming Monitor FreeSync Premium (AMD Adaptive Sync) 2560 x 1440 (2K) 91% DCI-P3 / 114% sRGB G27CQ4 E2',
      price: '$120',
      image: images.featureproduct3,
    },
  ]

  return (
    <section className="es_container px-[10px]">
      <div className="best-deals-wrapper grid lg:grid-cols-3 mg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 pt-5 pb-8">
        <div className="best-deals-items shadow flex items-center gap-3">
          <div className="relative">
            <img src={images.bestDeals} alt="" className="rounded " />
          </div>
          <div className="best_deals_content absolute flex flex-col  ml-5">
            <h3 className="">Home Showcase</h3>
            <p>Explore Home Upgrades for Every Room</p>
            <Link to={'/shop'}>
              <Button
                text="Shop Now"
                className="bg-ftPrimaryColor py-2 px-7 w-[125px] rounded-full text-white text-[14px] flex gap-2 items-center"
              ></Button>
            </Link>
          </div>
        </div>
        <div className="best-deals-items bg-white px-3 py-3 rounded shadow ">
          <div className="flex items-center justify-between">
            <p className="text-[16px] font-semibold text-[#041826]">
              We Recommend
            </p>
            <Link to={'/shop'} className="flex items-center gap-4">
              <Button
                text="See More"
                className="text-ftPrimaryColor text-[14px]"
              ></Button>
              <FaLongArrowAltRight />
            </Link>
          </div>

          <div className="flex items-center justify-between gap-3 mt-4">
            {products.map(product => (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredImage(product.id)}
                onMouseLeave={() => setHoveredImage(null)}
                className="product-container relative"
              >
                <img src={product.image} alt={product.name} />
                {hoveredImage === product.id && (
                  <div className="bg-white rounded-lg shadow-md px-4 py-4 w-[250px] absolute z-30 top-0 left-[50px] right-0 cursor-pointer hover:translate-x-[-30%] hover:translate-y-[-10%] transition-all duration-200">
                    <div>
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="pt-2">
                      <h2 className="text-[#041826] text-[16px] font-medium leading-5 mb-3">
                        {product.name.length > 30
                          ? product.name.slice(0, 30) + '...'
                          : product.name}
                      </h2>
                      <span className="text-ftPrimaryColor text-[24px] font-semibold ">
                        {product.price}. <sup>99</sup>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* <div className="bg-white rounded shadow-md px-2 py-2 w-[240px] hidden">
          <div>
            <img src={images.featureproduct1} alt="" />
          </div>
          <div>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
            <span>
              $200 <sup>99</sup>
            </span>
          </div>
        </div> */}
        <div className="best-deals-items bg-white px-3 py-3 rounded shadow">
          {/* <div className="wrapper">
            <div className="box vintage">
              <img
                src="https://source.unsplash.com/900x900/?vintage"
                alt="EMMYLOU"
              />
              <h2>EMMYLOU</h2>
              <p>I'll be your Emmylou and I'll be your June</p>
            </div>
          </div> */}
          <div className="flex items-center justify-between">
            <p className="text-[16px] font-semibold text-[#041826]">
              Trending Groceries
            </p>
          </div>
          <div className="flex items-center justify-between px-3 gap-3 mt-4">
            <div className="flex flex-col items-center gap-2">
              <img
                src={images.topCategory1}
                alt="featureproduct"
                className="w-[100px]"
              />
              <p className="uppercase text-[12px] font-medium text-[#041826]">
                Vegetables
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src={images.topCategory2}
                alt="featureproduct"
                className="w-[100px]"
              />
              <p className="uppercase text-[12px] font-medium text-[#041826]">
                Meet
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img
                src={images.topCategory3}
                alt="featureproduct"
                className="w-[100px]"
              />
              <p className="uppercase text-[12px] font-medium text-[#041826]">
                fruits
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
