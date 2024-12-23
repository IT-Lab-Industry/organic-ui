import { Link } from 'react-router-dom'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import images from '../../../assets/img/images'
import Button from '../../../common/Button/Button'

export default function RelatedProduct() {
  const relatedProducts = [
    {
      id: 1,
      product_id: 'P001',
      title: 'Horitoki Special Owls all over Kurti Piece',
      new_price: 49.99,
      old_price: 59.99,
      image: images.sharee1,
      rating: 4.5,
    },
    {
      id: 2,
      product_id: 'P002',
      title: 'Traditional Red and Gold Lehenga Choli',
      new_price: 39.99,
      old_price: 49.99,
      image: images.sharee2,
      rating: 4.2,
    },
    {
      id: 3,
      product_id: 'P003',
      title: 'Traditional Red and Gold Lehenga Choli',
      new_price: 79.99,
      old_price: 99.99,
      image: images.sharee3,
      rating: 4.7,
    },
    {
      id: 4,
      product_id: 'P004',
      title: "Stylish Men's Black Leather Jacket",
      new_price: 99.99,
      old_price: 129.99,
      image: images.sharee4,
      rating: 4.4,
    },
    {
      id: 5,
      product_id: 'P005',
      title: 'Vintage Denim Jeans for Women',
      new_price: 29.99,
      old_price: 39.99,
      image: images.sharee1,
      rating: 4.0,
    },
  ]

  return (
    <section className="es_container py-8 px-[10px]">
      <div className="bg-white rounded-md shadow-md px-7 py-4 flex justify-between items-center">
        <div className="flash_sale_headding">
          <p className="text-ftPrimaryColor text-[16px] font-semibold uppercase leading-6">
            Related Product
          </p>
        </div>
      </div>

      <div className="related_product_wrapper">
        <div className="grid lg:grid-cols-5 grid-cols-2 gap-5 py-5 rounded-md">
          {relatedProducts.map(product => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group"
            >
              <div className="border border-transparent group-hover:border-ftPrimaryColor transition-all duration-500 rounded-md group-hover:scale-105">
                <div className="w-full">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="px-2 py-5">
                  <div className="product_rating flex">
                    {[...Array(Math.floor(product.rating))].map((_, index) => (
                      <FaStar key={index} className="text-yellowColor" />
                    ))}
                    {product.rating % 1 >= 0.5 && (
                      <FaStarHalfAlt className="text-yellowColor" />
                    )}
                  </div>
                  <div className="product_title mt-2">
                    <p className="text-[14px] text-[#041826] leading-5 font-medium group-hover:text-ftPrimaryColor duration-200 transition-all group-hover:underline">
                      {product.title.length > 30
                        ? `${product.title.slice(0, 30)}...`
                        : product.title}
                    </p>
                  </div>
                  <div className="product_price_inner flex items-center gap-2 py-2">
                    <strong className="offer_price text-ftPrimaryColor text-[16px] font-bold">
                      ৳ {product.new_price}
                    </strong>
                    <span className="old_price line-through text-[14px] text-[#0f172a99] font-medium">
                      ৳ {product.old_price}
                    </span>
                  </div>
                  <div className="flex w-full items-center justify-center">
                    <Button
                      text="Shop Now"
                      className="bg-ftPrimaryColor py-2 px-16 w-full rounded text-white text-center text-[14px] flex items-center gap-2"
                      icon={IoCartOutline}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
