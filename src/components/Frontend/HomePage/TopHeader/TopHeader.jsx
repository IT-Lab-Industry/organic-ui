import React from 'react'
import { Link } from 'react-router-dom'
import { IoCallOutline } from 'react-icons/io5'
import { CiMail } from 'react-icons/ci'

const links = [
  { to: '/become-seller', text: 'Become a Seller' },
  { to: '/help-center', text: 'Help Center' },
  { to: '/wish-list', text: 'Wish List' },
]
export default function TopHeader() {
  return (
    <div className="bg-ftSecoundColor text-white border-b border-b-gray-600 hidden lg:block">
      <div className="es_container">
        <div className="flex items-center justify-between py-2">
          <div className="left flex items-center gap-3">
            <div className="number flex items-center ">
              <IoCallOutline className="text-ftPrimaryColor" />
              <a
                href="tel:+91 9876543210"
                className="ml-2 text-ftMuteColor text-[13px] font-light"
              >
                +91 9876543210
              </a>
            </div>
            <div className="email flex items-center">
              <CiMail className="text-ftPrimaryColor" />
              <a
                href="mailto: develoer@dev.com"
                className="ml-2 text-ftMuteColor text-[13px] font-light"
              >
                develoer@dev.com
              </a>
            </div>
          </div>
          <div className="right  ">
            <ul className="flex items-center gap-3">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    className="text-ftMuteColor text-[13px] font-light"
                    to={link.to}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
