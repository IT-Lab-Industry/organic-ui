import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../../common/Button/Button'
import images from '../../../../assets/img/images'

export default function HotDeals() {
  const hotDealsProduct = [
    {
      _id: '1',
      name: 'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0Ports,Black',
      img: images.hotDealsProduct1,
      price: '125',
    },
    {
      _id: '2',
      name: 'Samsung 27-Inch Odyssey G7 Curved Gaming Monitor | QHD 1000R Curved Display | 240Hz Refresh Rate | 1ms Response Time | G-Sync & FreeSync | Black',
      img: images.hotDealsProduct2,
      price: '125',
    },
    {
      _id: '3',
      name: 'ASUS ROG Strix XG279Q 27” HDR Gaming Monitor | 1440P WQHD (2560 x 1440) Fast IPS | 170Hz | G-SYNC Compatible | Extreme Low Motion Blur Sync (ELMB SYNC) | 1ms | DisplayHDR 400 | Eye Care | DisplayPort 1.2, HDMI 2.0 and HDMI 1.4',
      img: images.hotDealsProduct3,
      price: '125',
    },
    {
      _id: '4',
      name: 'LG 27GL83A-B 27 Inch Ultragear QHD IPS 1ms NVIDIA G-SYNC Compatible Gaming Monitor, Black',
      img: images.hotDealsProduct4,
      price: '125',
    },
    {
      _id: '5',
      name: 'BenQ EX3501R Ultrawide Curved Gaming Monitor | 34 inch Class (35 Inch) | 21:9 QHD (3440 X 1440) | 100Hz | HDR | FreeSync 2 | Built-in Speakers',
      img: images.hotDealsProduct5,
      price: '125',
    },
    {
      _id: '6',
      name: 'Alienware 25 Gaming Monitor - AW2518Hf, Full HD @ Native 240 Hz, 16: 9, 1ms Response Time, DP, HDMI 2.0a, USB 3.0, AMD FreeSync, Tilt, Swivel, Height-Adjustable',
      img: images.hotDealsProduct6,
      price: '125',
    },
  ]
  return (
    <section
      className="es_container py-8 px-[10px]"
    >
      <div className="bg-[#041826] px-3 py-3 rounded-xl shadow">
        <div className="section_title flex items-center justify-between px-4">
          <h3 className="text-white text-[16px] font-bold uppercase">
            Hot Deals:
          </h3>
          <Link to={'/shop'}>
            <Button
              text="See More"
              className="bg-white py-3 px-4 rounded text-[#041826] font-medium uppercase text-[14px] flex gap-2 items-center"
            ></Button>
          </Link>
        </div>
        <div className="hot_deals_wrapper px-4 py-3">
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 ">
            {hotDealsProduct.map(product => (
              <div className="border border-ftMuteColor/20 rounded-md ">
                <Link
                  className=""
                  to={`/product/${product._id}`}
                  key={product._id}
                >
                  <div className="hot_deals_img ">
                    <img
                      src={product.img}
                      alt=""
                      className="lg:w-[222px] w-full rounded-md"
                    />
                  </div>
                  <div className="hot-deals-content text-white px-4 pt-4">
                    <h3 className="text-[14px] font-medium leading-5 text-[#d6d6d6e6]">
                      {product.name.length > 30
                        ? `${product.name.slice(0, 30)}...`
                        : product.name}
                    </h3>
                    <div className="flex items-center gap-2 text-[18px] py-3">
                      <span>৳</span>
                      <strong>{product.price}</strong>{' '}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
