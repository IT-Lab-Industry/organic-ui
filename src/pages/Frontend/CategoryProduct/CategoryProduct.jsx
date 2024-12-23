import React, { useEffect } from 'react'
import CategoryBanner from '../../../components/Frontend/CategoryPage/Category Banner/CategoryBanner'
import { useGetSingleCategoryQuery } from '../../../redux/features/api/category/categoryApi'
import { useParams } from 'react-router-dom'
import CategoryWiseProduct from '../../../components/Frontend/CategoryPage/CategoryWiseProduct/CategoryWiseProduct'

export default function CategoryProduct() {
  const { slug } = useParams()
  const { data: CategoryWiseProducts, isLoading } =
    useGetSingleCategoryQuery(slug)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <CategoryBanner />
      {/* <SourceByCategory CategoryWiseProducts={CategoryWiseProducts} isLoading={isLoading} /> */}
      {/* <SourceByStyle /> */}
      {/* <CategorySlider/> */}
      <CategoryWiseProduct
        CategoryWiseProducts={CategoryWiseProducts}
        isLoading={isLoading}
      />
      {/* <BestShop /> */}
    </>
  )
}
