import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import images from '../../../../assets/img/images'
import Button from '../../../../common/Button/Button'

export default function FlashSale() {
  let time = '9day'
  const days = parseInt(time)
  const totalSeconds = days * 24 * 60 * 60

  const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSeconds(prevSeconds => {
        if (prevSeconds <= 0) {
          clearInterval(interval)
          return 0
        }
        return prevSeconds - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Calculate days, hours, minutes, and seconds from remainingSeconds
  const displayDays = Math.floor(remainingSeconds / (24 * 60 * 60))
  const displayHours = Math.floor(
    (remainingSeconds % (24 * 60 * 60)) / (60 * 60),
  )
  const displayMinutes = Math.floor((remainingSeconds % (60 * 60)) / 60)
  const displaySeconds = remainingSeconds % 60

  const flashsalProduct = [
    {
      id: 1,
      product_id: 'P001',
      name: 'Product 1',
      title:
        'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
      price: 49.99,
      old_price: 59.99,
      save_percentage: 17,
      shipping_optimize: true,
      free_shipping: false,
      image: images.flashproduct1,
      rating: 4.5,
    },
    {
      id: 2,
      product_id: 'P002',
      name: 'Product 2',
      title:
        'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
      price: 29.99,
      old_price: 39.99,
      save_percentage: 25,
      shipping_optimize: true,
      free_shipping: true,
      image: images.flashproduct2,
      rating: 3.5,
    },
    {
      id: 3,
      product_id: 'P003',
      name: 'Product 3',
      title:
        'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
      price: 79.99,
      old_price: 89.99,
      save_percentage: 11,
      shipping_optimize: true,
      free_shipping: false,
      image: images.flashproduct3,
      rating: 5,
    },
    {
      id: 4,
      product_id: 'P004',
      name: 'Product 4',
      title:
        'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
      price: 99.99,
      old_price: 119.99,
      save_percentage: 17,
      shipping_optimize: false,
      free_shipping: false,
      image: images.flashproduct4,
      rating: 4.5,
    },
    {
      id: 5,
      product_id: 'P005',
      name: 'Product 5',
      title:
        'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
      price: 39.99,
      old_price: 49.99,
      save_percentage: 20,
      shipping_optimize: true,
      free_shipping: true,
      image: images.flashproduct5,
      rating: 5,
    },
    {
      id: 6,
      product_id: 'P006',
      name: 'Product 6',
      title:
        'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
      price: 149.99,
      old_price: 169.99,
      save_percentage: 12,
      shipping_optimize: true,
      free_shipping: false,
      image: images.flashproduct6,
      rating: 5,
    },
    {
      id: 7,
      product_id: 'P007',
      name: 'Product 7',
      title:
        'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
      price: 59.99,
      old_price: 69.99,
      save_percentage: 14,
      shipping_optimize: false,
      free_shipping: true,
      image: images.flashproduct1,
      rating: 5,
    },
    {
      id: 8,
      product_id: 'P008',
      name: 'Product 8',
      title:
        'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
      price: 69.99,
      old_price: 79.99,
      save_percentage: 13,
      shipping_optimize: true,
      free_shipping: true,
      image: images.flashproduct1,
      rating: 4.5,
    },
    {
      id: 9,
      product_id: 'P009',
      name: 'Product 9',
      title:
        'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
      price: 19.99,
      old_price: 29.99,
      save_percentage: 33,
      shipping_optimize: false,
      free_shipping: false,
      image: images.flashproduct1,
      rating: 5,
    },
    {
      id: 10,
      product_id: 'P010',
      name: 'Product 10',
      title:
        'Acer Nitro XFA243Y Sbiipr 23.8 Full HD (1920 x 1080) VA Gaming Monitor | AMD FreeSync Premium Technology | 165Hz Refresh Rate | 1ms VRB | HDR 10 | 1 Display Port 1.2 & 2 HDMI 2.0 Ports,Black',
      price: 119.99,
      old_price: 139.99,
      save_percentage: 14,
      shipping_optimize: true,
      free_shipping: false,
      image: images.flashproduct1,
      rating: 4.5,
    },
  ]
  return (
    <section className="es_container py-8 px-[10px]">
      <div className="bg-white rounded-md shadow-md px-7 py-4 flex justify-between items-center">
        <div className="flash_sale_headding">
          <p className="text-black text-[16px] font-semibold uppercase leading-6">
            Flash Sale
          </p>
        </div>
        <div className="flash_sale_counter">
          <div className="count_wrapper">
            <div className="count_wrapper">
              <ul className="flex gap-2">
                <li>
                  <span
                    id="days"
                    className="rounded px-3 py-2 bg-ftPrimaryColor text-white"
                  >
                    {displayDays}
                  </span>
                </li>
                :
                <li>
                  <span
                    id="hours"
                    className="rounded px-3 py-2 bg-ftPrimaryColor text-white"
                  >
                    {displayHours}
                  </span>
                </li>
                :
                <li>
                  <span
                    id="minutes"
                    className="rounded px-3 py-2 bg-ftPrimaryColor text-white"
                  >
                    {displayMinutes}
                  </span>
                </li>
                :
                <li>
                  <span
                    id="seconds"
                    className="rounded px-3 py-2 bg-ftPrimaryColor text-white"
                  >
                    {displaySeconds}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex gap-5 py-5">
        <div className="flash_banner lg:w-[40%] lg:mb-0 mb-4">
          <div>
            <img
              src={images.flashbanner}
              alt=""
              className="w-full lg:h-[756px] sm:hidden lg:block h-[500px] rounded"
            />
          </div>
        </div>
        <div className="lg:w-[60%]">
          <Link>
            <div className="grid lg:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-2 rounded-md">
              {flashsalProduct.slice(0, 6).map(product => (
                <div
                  key={product.id}
                  className="flash_product bg-white shadow rounded-md group"
                >
                  <div className="flash_product_thumb lg:w-[200px] mx-auto w-full ">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full group-hover:scale-110 transition-all duration-500 rounded-lg p-3"
                    />
                  </div>
                  <div className="flash_product_content px-5 py-5">
                    <div className="product_rating flex">
                      {[...Array(Math.floor(product.rating))].map(
                        (_, index) => (
                          <FaStar key={index} className="text-yellowColor" />
                        ),
                      )}
                      {product.rating % 1 >= 0.5 && (
                        <FaStarHalfAlt className="text-yellowColor" />
                      )}
                    </div>
                    <div className="product_title mt-2">
                      <p className="text-[14px] text-[#041826] leading-5 font-medium group-hover:text-ftPrimaryColor duration-200 transition-all group-hover:underline">
                        {product.title.length > 40
                          ? `${product.title.slice(0, 40)}...`
                          : product.title}
                      </p>
                    </div>

                    <div className="flash_save h-8 w-20 flex items-center justify-center  rounded-tr-xl rounded-bl-2xl bg-ftPrimaryColor my-2 ">
                      <p className="text-center text-white text-[14px] leading-[20px]">
                        Save {product.save_percentage} ৳
                      </p>
                    </div>

                    <div
                      className={`product_price_inner flex items-center gap-2 ${product.free_shipping ? 'py-2' : 'py-0'}`}
                    >
                      <strong className="offer_price text-ftPrimaryColor text-[16px] font-bold">
                        ৳ {product.price}
                      </strong>
                      <span className="old_price line-through text-[14px] text-[#0f172a99] font-medium">
                        ৳ {product.old_price}
                      </span>
                    </div>
                    {/* <div className="flash_shipping">
                      <p
                        className={`text-[#041826] uppercase text-[10px] mt-3 font-semibold ${product.free_shipping ? 'border border-ftPrimaryColor px-2 w-[108px]' : ''}`}
                      >
                        {product.free_shipping ? 'Free Shipping' : ''}
                      </p>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </Link>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <Link to={'/flashsale'}>
          <Button
            text="View All"
            className="bg-ftPrimaryColor py-3 px-8 rounded text-white text-center text-[14px] "
          ></Button>
        </Link>
      </div>
    </section>
  )
}
