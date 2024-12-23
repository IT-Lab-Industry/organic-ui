import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import images from '../../../assets/img/images'
import Button from '../../../common/Button/Button'
export default function FilterProductList({ products }) {
  return (
    <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3  lg:grid-cols-5 gap-4">
      {products?.map(product => (
        <Link
          to={`/product/${product.id}`}
          key={product.id}
          className="filter_product"
        >
          <div className="filter_product_item border hover:border-none">
            <div className="filter_product_thumb mx-auto h-full">
              <img src={images.sharee5} alt="" className="w-full rounded-md" />
            </div>
            <div className="filter_product_content px-3 pt-2">
              <div className="product_rating flex">
                {[...Array(Math.floor(product.rating.rate))].map((_, index) => (
                  <FaStar key={index} className="text-yellowColor" />
                ))}
                {product.rating.rate % 1 >= 0.5 && (
                  <FaStarHalfAlt className="text-yellowColor" key="half-star" />
                )}
              </div>
              <p className="filter_product_name">
                {product.title.slice(0, 18)}
              </p>
              <div className="filter_product_price">
                <span className="offer_price">{product.price}</span>
                <span className="old_price">700</span>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <Link to={'/flashsale'}>
                  <Button
                    text="View All"
                    className="bg-ftPrimaryColor lg:py-2 lg:px-14 px-10 w-fill py-2 mt-1 rounded text-white text-center lg:text-[14px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
