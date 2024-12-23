import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'

import { Link } from 'react-router-dom'
import images from '../../../../assets/img/images'
import Button from '../../../../common/Button/Button'

export default function BestShop() {
  const vendor = [
    {
      id: 1,
      vendor_id: 'V001',
      name: ' Beauty Shop',
      image: images.bestshop1,
      rating: 4.5,
      path: 'vendorshop/1',
    },
    {
      id: 2,
      vendor_id: 'V002',
      name: ' Beauty Shop',
      image: images.bestshop1,
      rating: 4.5,
      path: 'vendorshop/1',
    },
    {
      id: 3,
      vendor_id: 'V003',
      name: ' Beauty Shop',
      image: images.bestshop1,
      rating: 4.5,
      path: 'vendorshop/1',
    },
    {
      id: 4,
      vendor_id: 'V004',
      name: ' Beauty Shop',
      image: images.bestshop1,
      rating: 4.5,
      path: 'vendorshop/1',
    },
  ]
  return (
    <section
      className="es_container px-[10px]"
    >
      <div className="bg-white px-3 py-3 rounded-xl shadow">
        <div className="flex items-center justify-between px-5 py-2">
          <p className="uppercase text-ftPrimaryColor text-[16px] font-bold">
            Best Shop:{' '}
          </p>
        </div>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 rounded-md py-5 px-4 ">
          {vendor.map(vendor => (
            <div
              key={vendor.id}
              className="border border-ftMuteColor rounded-md"
            >
              <Link to={'/vendorshop/1'}>
                <div className="relative h-[200px]">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="rounded-t-md h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0">
                    <p className="bg-ftPrimaryColor/50 text-center text-[16px] py-2  text-white">
                      {vendor.name}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center my-4">
                  <div className="ratting flex items-center gap-2">
                    {[...Array(Math.floor(vendor.rating))].map((_, index) => (
                      <FaStar key={index} className="text-yellowColor" />
                    ))}
                    {vendor.rating % 1 >= 0.5 && (
                      <FaStarHalfAlt className="text-yellowColor" />
                    )}
                  </div>
                </div>
                <div className="flex w-full items-center justify-center mb-4">
                  <Button
                    text="View Shop"
                    className="bg-ftPrimaryColor py-2 px-20 font-medium rounded text-white text-center text-[14px] flex items-center gap-2 uppercase"
                  ></Button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
