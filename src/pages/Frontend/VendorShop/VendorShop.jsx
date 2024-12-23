import React, { useEffect, useState } from 'react'
import images from '../../../assets/img/images'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function VendorShop() {
   const [searchQuery, setSearchQuery] = useState('')
   const [filteredData, setFilteredData] = useState([])
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredData(vendorShop)
    } else {
      const filtered = vendorShop.filter(
        item =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.rating.includes(searchQuery),
      )
      setFilteredData(filtered)
    }
      }, [searchQuery])
 

  const vendorShop = [
    {
      id: '1',
      name: 'The marka Mara Shop',
      image: images.vendorShop1,
      rating: '3',
    },
    {
      id: '2',
      name: 'The marka Mara Shop',
      image: images.vendorShop2,
      rating: '4',
    },
    {
      id: '3',
      name: 'The marka Mara Shop',
      image: images.vendorShop3,
      rating: '5',
    },
    {
      id: '4',
      name: 'Classic IT',
      image: images.vendorShop4,
      rating: '1',
    },
    {
      id: '5',
      name: 'Ashik bhai Shop',
      image: images.vendorShop5,
      rating: '2',
    },
    {
      id: '6',
      name: 'The marka Mara Shop',
      image: images.vendorShop6,
      rating: '5',
    },
    {
      id: '7',
      name: 'The marka Mara Shop',
      image: images.vendorShop7,
      rating: '4',
    },
    {
      id: '8',
      name: 'The marka Mara Shop',
      image: images.vendorShop8,
      rating: '4.3',
    },
    {
      id: '9',
      name: 'The marka Mara Shop',
      image: images.vendorShop9,
      rating: '4.3',
    },
    {
      id: '10',
      name: 'The marka Mara Shop',
      image: images.vendorShop10,
      rating: '4.3',
    },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="es_container px-3 py-8">
      <div className="bg-white rounded-md shadow-md px-7 py-4 flex justify-between items-center">
        <div className="">
          <p className="text-ftPrimaryColor text-[16px] font-semibold uppercase leading-6">
            Vendor Shop
          </p>
        </div>
        <form className="flex flex-1 justify-between lg:max-w-xs ">
          <input
            id="search"
            type="search"
            placeholder="Search your Shop"
            className="w-full px-3 py-2 focus:outline-none rounded-l text-gray-600 bg-gray-200"
            name="search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
           
          />
          <button
            className="px-5 text-white rounded-r bg-ftPrimaryColor hover:bg-opacity-80"
            type="submit"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              className="text-whiteColor text-xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeMiterlimit={10}
                strokeWidth={32}
                d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z"
              />
              <path
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={32}
                d="M338.29 338.29 448 448"
              />
            </svg>
          </button>
        </form>
      </div>

      <div className="grid grid-cols-4 gap-5 pt-10 pb-5 ">
        {filteredData.map(vendor => (
          <Link
            to={'/'}
            key={vendor.id}
            className="bg-white rounded-md relative"
          >
            <figure className="max-w-32 my-5 mx-auto">
              <img
                src={vendor.image}
                alt=""
                className="w-full rounded-md relative z-0"
              />
            </figure>
            <div className="border-t border-t-gray-200 py-5 px-5">
              <div className="flex gap-2">
                {[...Array(Math.floor(vendor.rating))].map((_, index) => (
                  <FaStar key={index} className="text-yellowColor" />
                ))}
                {vendor.rating % 1 >= 0.5 && (
                  <FaStarHalfAlt className="text-yellowColor" />
                )}
              </div>
              <h3 className="mt-3 text-[#041826] text-[17px] leading-4 font-medium hover:text-ftPrimaryColor hover:transition-all duration-200">
                {vendor.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
      
    </section>
  )
}
