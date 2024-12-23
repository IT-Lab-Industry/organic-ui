import React from 'react'
import images from '../../assets/img/images'
import { Link } from 'react-router-dom'
import { IoCallOutline } from 'react-icons/io5'
import { CiMail } from 'react-icons/ci'

import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa'

export default function FrontendFooter() {
  const footer = {
    about: [
      {
        id: '1',
        address:
          'Lutfun Tower(4th Floor),House No.E-13,Middle Badda,Pragati Sarani, Badda, Dhaka, PO : 1212',
        phone: '+8801711111111',
        email: 'info.eshop@gmail.com',
        images: images.headerlogo,
      },
    ],

    information: [
      { id: '11', name: 'Terms & Conditions' },
      { id: '22', name: 'FAQ' },
      { id: '33', name: 'Refund Policy' },
      { id: '44', name: 'Seller Promises' },
      { id: '55', name: 'Help center' },
    ],

    service: [
      { id: '1', name: 'Shipping' },
      { id: '2', name: 'Returns' },
      { id: '3', name: 'Payment' },
      { id: '4', name: 'FAQs' },
      { id: '5', name: 'Contact Us' },
    ],

    socialIcons: [
      {
        icon: (
          <FaFacebookSquare className="rounded text-ftPrimaryColor w-6 h-6" />
        ),
        link: 'your_facebook_link',
      },
      {
        icon: <FaTwitter className="rounded text-ftPrimaryColor w-6 h-6" />,
        link: 'your_twitter_link',
      },
      {
        icon: <FaInstagram className="rounded text-ftPrimaryColor w-6 h-6" />,
        link: 'your_instagram_link',
      },
      {
        icon: <FaLinkedin className="rounded text-ftPrimaryColor w-6 h-6" />,
        link: 'your_linkedin_link',
      },
    ],
  }
  return (
    <footer className="bg-[#041826] py-8 text-white">
      <div className="es_container">
        <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 mb-3 lg:px-0 px-5">
          {footer?.about?.map(item => (
            <div key={item.id} className="about">
              <Link to={'/'}>
                <img
                  src={item?.images}
                  alt=""
                  className="lg:w-[12.5rem] w-[200px]"
                />
              </Link>
              <p className="text-ftMuteColor text-[14px] my-5">
                {item?.address}
              </p>
              <div>
                <div className="number flex items-center group">
                  <IoCallOutline className="text-ftMuteColor group-hover:text-ftPrimaryColor" />
                  <a
                    href={`tel:${item?.phone}`}
                    className="ml-2 text-ftMuteColor group-hover:text-ftPrimaryColor text-[14px] font-light"
                  >
                    {item?.phone}
                  </a>
                </div>
                <div className="email flex items-center group">
                  <CiMail className="text-ftMuteColor group-hover:text-ftPrimaryColor" />
                  <a
                    href={`mailto:${item?.email}`}
                    className="ml-2 text-ftMuteColor group-hover:text-ftPrimaryColor text-[14px] font-light"
                  >
                    {item?.email}
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Service Section */}
          <div className="service">
            <div className="mb-[18px]">
              <h3 className="text-[20px] font-medium">Service</h3>
            </div>
            <div>
              <ul>
                {footer?.service.map(service => (
                  <li
                    key={service.id}
                    className="text-ftMuteColor text-[14px] hover:text-ftPrimaryColor py-1"
                  >
                    <Link to={'/service/1'}>{service.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Information Section */}
          <div className="information">
            <div className="mb-[18px]">
              <h3 className="text-[20px] font-medium">Information</h3>
            </div>
            <div>
              <ul>
                {footer?.information.map(info => (
                  <li
                    key={info.id}
                    className="text-ftMuteColor text-[14px] hover:text-ftPrimaryColor py-1"
                  >
                    <Link to={'/info/1'}>{info.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Download App Section */}
          <div className="download app">
            <div className="mb-[18px]">
              <h3 className="text-[20px] font-medium">App</h3>
            </div>
            <ul>
              <li className="text-ftMuteColor text-[14px]">
                Download Our Mobile Apps -
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-3">
              <img src={images.playstore} alt="" className="w-[124px]" />
              <img src={images.appstore} alt="" className="w-[124px]" />
            </div>
            <img src={images.payment} alt="" className="mt-[20px] w-[700px]" />
          </div>
        </div>

        <div className="lg:flex items-center justify-between border-t border-t-ftMuteColor py-2 lg:px-0 px-5">
          <div className="flex items-center gap-2 lg:mb-0 mb-2">
            {footer?.socialIcons.map((icon, index) => (
              <span>
                <a key={index} href={icon.link}>
                  {icon.icon}
                </a>
              </span>
            ))}
          </div>
          <div>
            <p className="text-ftMuteColor text-[13px]">
              Copyright © 2024.{' '}
              <strong className="text-darkColorText">IT Lab Industry</strong> all
              right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
