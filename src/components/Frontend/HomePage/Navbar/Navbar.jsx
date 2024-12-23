import React from 'react'
import { Link } from 'react-router-dom'
import categoryData from '../Banner/category'

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white hidden lg:block">
      <div className="es_container">
        <div className="col-span-2 hidden lg:block">
          <ul className="category_list flex justify-evenly gap-5">
            {categoryData?.slice(0, 9).map((category, index) => (
              <li
                className="category-items group"
                key={index}
              >
                <Link className="flex flex-col py-1">
                  <span className="text-sideBarTextColor opacity-90 group-hover:opacity-100 text-[16px] leading-[27px] font-normal py-2">
                    {category.name}
                  </span>
                  <span className='w-0 group-hover:w-full transition-all duration-300 ease-in-out h-[2px] bg-white'></span>
                </Link>
              </li>
            ))}
          </ul>
        </div> 
      </div>
    </div>
  )
}

export default Navbar
