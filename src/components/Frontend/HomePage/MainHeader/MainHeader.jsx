// import { FaSearch } from 'react-icons/fa'
import { IoMdGift } from 'react-icons/io'
import { CiUser } from 'react-icons/ci'
import { RiShoppingBagFill } from 'react-icons/ri'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'

import images from '../../../../assets/img/images'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import CartProducts from '../../CartProducts/CartProducts'
import MobileMenu from '../../MobileMenu/MobileMenu'
import MobileMenuButtom from '../../MobileMenu/MobileMenuButtom'
import { BsCart2 } from 'react-icons/bs'

export default function MainHeader() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <div className="bg-ftSecoundColor text-white shadow-sm py-2">
      <div className="es_container ">
        {/* desktop */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between gap-4 py-2">
            <Link to={'/'} className="logo">
              <img
                src={images.Logo}
                alt=""
                className="h-full lg:w-[12.5rem] w-[100px]"
              />
            </Link>
            <div className="search flex-1">
              {/* <div className=" bg-white rounded-[30px] flex items-center justify-between">
              <input
                type="search"
                className="py-3 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor text-bgray-700 font-normal"
                placeholder="Search a Your Favorite Products"
              />
              <button className="bg-ftPrimaryColor py-[16px] text-white mt-0 rounded-[30px]  rounded-l-md px-5">
                <FaSearch />
              </button>
            </div> */}

              <form className="flex flex-1 justify-between lg:max-w-5xl">
                <input
                  id="search"
                  type="search"
                  placeholder="Search your need products"
                  className="w-full px-3 py-2 focus:outline-none rounded-l text-black"
                  name="search"
                  defaultValue=""
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

            <div className="header-right flex gap-4 ">
              <div className="offer flex items-center gap-3">
                <span className="icon">
                  <IoMdGift className="text-ftPrimaryColor text-[26px]" />
                </span>
                <Link className="flex flex-col">
                  <p className="text-[14px] leading-[14px] font-medium">
                    Offer
                  </p>
                  <span className="text-ftMuteColor text-[13px] font-light">
                    Latest Offer
                  </span>
                </Link>
              </div>
              <div className="account flex items-center gap-2">
                <span className="icon">
                  <CiUser className="text-ftPrimaryColor text-[26px]" />
                </span>
                <div className="flex flex-col">
                  <p className="text-[14px] leading-[14px] font-medium">
                    Account
                  </p>
                  <span className="text-ftMuteColor text-[13px] font-light">
                    <Link to={'/user/register'}>Register</Link> or {''}
                    <Link to={'/user/login'}>Login</Link>
                  </span>
                </div>
              </div>
              <Link to={'/cart'} className="cart flex items-center gap-2">
                <span className="icon">
                  <RiShoppingBagFill className="text-ftPrimaryColor text-[26px]" />
                </span>
                <div className="flex flex-col">
                  <p className="text-[14px] leading-[14px] font-medium">Cart</p>
                  <span className="text-ftMuteColor text-[13px] font-light">
                    Products
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="block lg:hidden">
          <div className="py-2 px-4 flex items-center justify-between ">
            <div>
              <span onClick={() => setIsMobileMenuOpen(true)}>
                <HiOutlineMenuAlt2 className="border rounded-full w-8 h-8 !p-1" />
              </span>
            </div>
            <div>
              <Link to={'/'} className="logo">
                <img
                  src={images.Logo}
                  alt=""
                  className="h-full lg:w-[12.5rem] w-[100px]"
                />
              </Link>
            </div>
            <div>
              <div
                onClick={() => setIsCartOpen(true)}
                className="bg-primaryLightColor w-12 h-12 bottom-0 flex items-center justify-center rounded-full relative text-white shadow-lg shadow-slate-600"
              >
                <BsCart2 size={24} />
                <sup className="text-white w-5 h-5 flex items-center justify-center absolute -top-1 -right-1 bg-error-300 rounded-full">
                  1
                </sup>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <MobileMenuButtom />
      <CartProducts isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </div>
  )
}
