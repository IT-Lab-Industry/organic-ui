/* eslint-disable @typescript-eslint/no-unused-vars */

import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import ProductHighlightSection from '../../../components/Frontend/ProductDetailsPage/ProductHighlightSection'
import RightSideShoppingSection from '../../../components/Frontend/ProductDetailsPage/RightSideShoppingSection'
import ProductAccordion from '../../../components/Frontend/ProductDetailsPage/ProductAccordion'
import SuggestProduct from '../../../components/Frontend/ProductDetailsPage/SuggestProduct'
import RelatedProducts from '../../../components/Frontend/ProductDetailsPage/RelatedProducts'

import { toast } from 'react-toastify'
import Loader from '../../../common/Loader/Loader'

const ProductDetails = () => {
 const { id } = useParams()
  const [singleProduct, setSingleProduct] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setSingleProduct({})

          console.log('err:', data.error)
          toast.error('Sorry! Product is not available.')
        } else {
          // If data is successfully fetched, set the product details
          setSingleProduct(data)
        }
        // console.log(data);
        setLoading(false)
      })
  }, [id])

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    )
  }

  return (
    <section>
      <div>
      <div className="max-w-[1300px] mx-auto my-8  bg-white p-5  ">
        <div className="grid  grid-cols-1 sm:grid-cols-3 md:grid-cols-7 lg:grid-cols-7 ">
          {/* img div  */}
          <div className=" lg:col-span-2 md:col-span-2 sm:col-span-1  col-span-1 ">
            <div className="">
              <div className="border border-gray-200 p-2">
                <img
                  className=" w-full lg:h-[382px]  md:h-[272px] sm:h-[353px]"
                  src={selectedImage ? selectedImage : singleProduct.thumbnail}
                  alt="product"
                />
              </div>

              <div className="flex flex-wrap my-2 ">
                {singleProduct.images &&
                  singleProduct.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`image-${index}`}
                      className={`h-16 w-16 border  p-1 mr-2 my-2 ${selectedImage === image ? 'border-ftPrimaryColor' : 'border-gray-200'}`}
                      onClick={() => setSelectedImage(image)}
                    />
                  ))}
              </div>
            </div>
          </div>

          {/* Name price and buy add to cart section  */}
          <div className="lg:col-span-3 md:col-span-3 sm:col-span-2 col-span-1 px-4 ">
            <ProductHighlightSection singleProduct={singleProduct} />
          </div>

          {/*--------- right sidebar -------- */}
          <div className="lg:col-span-2 md:col-span-2 sm:col-span-3  col-span-1 px-4 ">
            <RightSideShoppingSection singleProduct={singleProduct} />
          </div>
        </div>
        {/* Accordion*/}

        <div className="grid lg:grid-cols-7 md:grid-5 grid-cols-1 gap-2 my-10">
          <div className="lg:col-span-5 md:col-span-3 col-span-1">
            <ProductAccordion singleProduct={singleProduct} />
          </div>

          <div className="lg:col-span-2 md:col-span-2 col-span-1">
            <SuggestProduct />
          </div>
        </div>
      </div>

      {/* Related Product */}

      <div className="max-w-[1300px] mx-auto mt-16 mb-4  bg-white p-4 rounded-lg  ">
        <p className="text-ftPrimaryColor font-bold">RELETED PRODUCT:</p>
      </div>
      {/* Related Product card */}
      <div className="max-w-[1300px] mx-auto my-16   ">
        <RelatedProducts />
      </div>
    </div>
    </section>
  )
}

export default ProductDetails
