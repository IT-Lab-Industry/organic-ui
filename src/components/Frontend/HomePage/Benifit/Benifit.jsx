import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { RxCross1 } from 'react-icons/rx'
import { GiShop } from 'react-icons/gi'
import { GiWashingMachine } from 'react-icons/gi'
import { TbShoppingBagEdit } from 'react-icons/tb'
import CustomOrder from '../Custom Order/CustomOrder'
import LaundryModal from '../Launtry Modal/LaundryModal'
import { FaSuitcaseMedical } from 'react-icons/fa6'
export default function Benifit() {
  const [isCustomOrder, setIsCustomOrder] = useState(false)
  const [isLaundry, setLaundry] = useState(false)

  // handle custom order modal
  const handleOpenCustomerOrderModal = () => {
    setIsCustomOrder(true)
  }

  const handleCloseCustomOrderModal = () => {
    setIsCustomOrder(false)
  }

  // handle laundry modal
  const handleOpenLaundryModal = () => {
    setLaundry(true)
  }
  const handleCloseLaundryModal = () => {
    setLaundry(false)
  }

  const handleSubmit = () => {
    setIsCustomOrder(false)
    setLaundry(false)
    showToast()
  }

  const showToast = () => {
    toast.success('Submited', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })
  }

  return (
    <section className="es_container px-[10px]">
      <div className=" grid lg:grid-cols-4 mg:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-3 pt-5 pb-8">
        {/* super shop  */}
        <Link
          to={'/super-shop'}
          className="benifit_item bg-white px-3 py-3 rounded shadow flex items-center gap-3"
        >
          <div className="benifit_icon flex items-center gap-3">
            <span className="bg-ftPrimaryColor lg:px-3 lg:py-3 px-2 py-2 rounded-full">
              <GiShop className="text-[20px] text-white" />
            </span>
          </div>
          <div className="benifit_text">
            <p className="lg:text-[17px] text-[15px] font-bold text-[#041826]">
              Super Shop
            </p>
          </div>
        </Link>

        {/* custom order */}
        <div
          onClick={handleOpenCustomerOrderModal}
          className="benifit_item bg-white px-3 py-3 rounded shadow flex items-center gap-3 cursor-pointer"
        >
          <div className="benifit_icon flex items-center gap-3">
            <span className="bg-ftPrimaryColor lg:px-3 lg:py-3 px-2 py-2 rounded-full">
              <TbShoppingBagEdit className="text-[20px]  text-white" />
            </span>
          </div>
          <div className="benifit_text ">
            <p className="lg:text-[17px] text-[15px] font-bold text-[#041826]">
              Custom Order
            </p>
          </div>
        </div>

        {isCustomOrder && (
          <div className="fixed inset-0 bg-gray-800/35  transition-all duration-300 z-50">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full lg:max-w-2xl sm:max-w-xl max-w-lg rounded-md p-4">
              <CustomOrder handleSubmit={handleSubmit} />
              <button
                onClick={handleCloseCustomOrderModal}
                className="absolute top-2 right-2 focus:outline-none transition-all duration-300 p-2 rounded bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor"
              >
                <RxCross1 size={20} />
              </button>
            </div>
          </div>
        )}

        {/* laundry services*/}
        <div
          onClick={handleOpenLaundryModal}
          className="benifit_item bg-white px-3 py-3 rounded shadow flex items-center gap-3 lg:mt-0 mt-2 cursor-pointer"
        >
          <div className="benifit_icon flex items-center gap-3">
            <span className="bg-ftPrimaryColor lg:px-3 lg:py-3 px-2 py-2 rounded-full">
              <GiWashingMachine className="text-[20px] text-white" />
            </span>
          </div>
          <div className="benifit_text">
            <p className="lg:text-[17px] text-[15px] font-bold text-[#041826]">
              Laundry Services
            </p>
          </div>
        </div>
        {isLaundry && (
          <div className="fixed inset-0  bg-gray-800/35  transition-all duration-300 z-50">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full lg:max-w-2xl sm:max-w-xl max-w-lg rounded-md ">
              <LaundryModal handleSubmit={handleSubmit} />
              <button
                onClick={handleCloseLaundryModal}
                className="absolute top-2 right-2 focus:outline-none transition-all duration-300 p-2 rounded bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor"
              >
                <RxCross1 size={20} />
              </button>
            </div>
          </div>
        )}

        <Link
          to={'/medicine'}
          className="benifit_item bg-white px-3 py-3 rounded shadow flex items-center gap-3 lg:mt-0 mt-2 "
        >
          <div className="benifit_icon flex items-center gap-3">
            <span className="bg-ftPrimaryColor lg:px-3 lg:py-3 px-2 py-2 rounded-full">
              <FaSuitcaseMedical className="text-[20px] text-white" />
            </span>
          </div>
          <div className="benifit_text">
            <p className="lg:text-[17px] text-[15px] font-bold text-[#041826]">
              Medicine
            </p>
          </div>
        </Link>
      </div>
    </section>
  )
}
