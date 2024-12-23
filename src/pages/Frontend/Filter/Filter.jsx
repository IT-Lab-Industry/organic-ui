/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import './Filter.css'
import { FaStar } from 'react-icons/fa'
import axios from 'axios'

import FilterProductList from './FilterProductList'
import { CgMenuGridR } from 'react-icons/cg'
import FilterMenu from './FilterMenu'

const colors = [
  { name: 'Red', code: '#FF0000' },
  { name: 'Green', code: '#00FF00' },
  { name: 'Blue', code: '#0000FF' },
  { name: 'Yellow', code: '#FFFF00' },
  { name: 'Black', code: '#000000' },
  { name: 'White', code: '#FFFFFF' },
  // Add more colors as needed
]

export default function Filter() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const initialBrands = ['Manfare', 'SMUG', 'Fabrilife', 'LEEBAS', 'Goodman']
  const allBrands = [
    ...initialBrands,
    'Fashion Park',
    'Ensign',
    'Cotton Lab',
    'Penguin',
    'Tazim Fashion',
    'LOCALÉ',
    'Bangla Mart',
    'Richman',
    'IELGY',
    'Aynaghor',
  ]
  const initialSizes = ['XXS', 'XS', 'S', 'M', 'L']
  const allSizes = [...initialSizes, 'XL', 'XXL', 'XXXL']

  const [visibleBrands, setVisibleBrands] = useState(initialBrands)
  const [visibleColors, setVisibleColors] = useState(colors.slice(0, 5))
  const [selectedColors, setSelectedColors] = useState([])
  const [visibleSizes, setVisibleSizes] = useState(initialSizes)

  // Function to handle "Load More"
  const handleLoadMore = type => {
    switch (type) {
      case 'brands':
        setVisibleBrands(allBrands)
        break
      case 'colors':
        setVisibleColors(colors)
        break
      case 'sizes':
        setVisibleSizes(allSizes)
        break
      default:
        break
    }
  }

  const handleColorSelection = color => {
    setSelectedColors(prevSelectedColors =>
      prevSelectedColors.includes(color)
        ? prevSelectedColors.filter(c => c !== color)
        : [...prevSelectedColors, color],
    )
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        let filteredProducts = response.data

        if (selectedColors.length > 0) {
          filteredProducts = filteredProducts.filter(product =>
            selectedColors.some(color => product.color === color.name),
          )
        }

        setProducts(filteredProducts)
      } catch (error) {
        setError('Error fetching data. Please try again later.')
        console.error('Error fetching data:', error)
      }
    }

    fetchProducts()
  }, [selectedColors])

  return (
    <section className="es_container py-8">
      <div className="flex  justify-between ">
        <div
          className="filter_sidebar lg:block hidden "
          style={{ left: '-100%' }}
        >
          <div className="filter_sidebar_content bg-white overflow-y-auto">
            {/* Brands Section */}
            <div className="filter_sidebar_block">
              <h5 className="filter_sidebar_title">Brand</h5>
              {visibleBrands?.map((brand, index) => (
                <label
                  className="checkbox--tqPns"
                  style={{ display: 'block' }}
                  key={index}
                >
                  <span className="ant-checkbox">
                    <input type="checkbox" className="ant-checkbox-input" />
                    <span className="ant-checkbox-inner" />
                  </span>
                  <span>{brand}</span>
                </label>
              ))}
              {visibleBrands.length < allBrands.length && (
                <button
                  className="load-more-button"
                  onClick={() => handleLoadMore('brands')}
                >
                  Load More
                </button>
              )}
            </div>

            {/* Price Section */}
            <div className="filter_sidebar_listBlock">
              <h5 className="filter_sidebar_title">Price</h5>
              <form action="" className="price_search_range">
                <div className="price_search_item">
                  <label htmlFor="">Min</label>
                  <input type="number" className="input_control" />
                </div>
                <div className="price_search_item">
                  <label htmlFor="">Max</label>
                  <input type="number" className="input_control" />
                </div>
                <div className="price_range_submit w-100">
                  <button type="submit">Filter</button>
                </div>
              </form>
            </div>

            {/* Colors Section */}
            <div className="filter_sidebar_block">
              <h5 className="filter_sidebar_title">Color Family</h5>
              <div className="color-list grid grid-cols-2 gap-2">
                {visibleColors?.map((color, index) => (
                  <div
                    className="flex items-center justify-evenly py-[6px] border rounded cursor-pointer"
                    key={index}
                    onClick={() => handleColorSelection(color)}
                  >
                    <div
                      className="color-item rounded-md text-[10px] border w-[20px] h-[20px]"
                      style={{ backgroundColor: color.code }}
                    ></div>
                    <span className="text-[10px]">{color.name}</span>
                  </div>
                ))}
              </div>
              {visibleColors.length < colors.length && (
                <button
                  className="load-more-button"
                  onClick={() => handleLoadMore('colors')}
                >
                  Load More
                </button>
              )}
            </div>

            {/* Ratting Section */}
            <div className="filter_sidebar_listBlock">
              <h5 className="filter_sidebar_title">Rating</h5>
              <ul className="filter_sidebar_rating">
                {[5, 4, 3, 2, 1].map(rating => (
                  <li key={rating}>
                    <a href="" className="flex gap-1">
                      <span>{rating}</span>
                      <p className="start_wrapper_rating flex text-yellowColor">
                        {[...Array(rating)].map((_, index) => (
                          <span key={index}>
                            <FaStar />
                          </span>
                        ))}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sizes Section */}
            <div className="filter_sidebar_block">
              <h5 className="filter_sidebar_title">Size</h5>
              {visibleSizes.map((size, index) => (
                <label
                  className="checkbox--tqPns"
                  style={{ display: 'block' }}
                  key={index}
                >
                  <span className="ant-checkbox">
                    <input type="checkbox" className="ant-checkbox-input" />
                    <span className="ant-checkbox-inner" />
                  </span>
                  <span>{size}</span>
                </label>
              ))}
              {visibleSizes.length < allSizes.length && (
                <button
                  className="load-more-button"
                  onClick={() => handleLoadMore('sizes')}
                >
                  Load More
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="filter_body">
          <div className="filter_header">
            <div className="filter_header_wrapper">
              <p className="filter_product_count">
                Total <span>20</span> products found
              </p>

              <div className="block lg:hidden sm:hidden">
                <div className="py-2 px-4 flex items-center justify-between ">
                  <div>
                    <button
                      className="border rounded border-ftPrimaryColor p-1"
                      onClick={() => setIsMobileMenuOpen(true)}
                    >
                      <CgMenuGridR size={28} />
                    </button>
                  </div>
                </div>
              </div>
              {/* product show type */}
              <div className="prduct_show_type">
                <span>Sort By :</span>
                <select name="" className="form-select">
                  <option value="" selected="" hidden="">
                    Select One
                  </option>
                  <option value="">Top Sale</option>
                  <option value="">News Arrival</option>
                  <option value="">Price High To Low</option>
                  <option value="">Price Low To High</option>
                </select>
              </div>
            </div>
          </div>

          <div className="filter_product_main">
            <div className="filter_product_wrapper">
              <FilterProductList products={products} />
            </div>
          </div>

          <div>
            <FilterMenu
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
              setProducts={setProducts}
              setError={setError}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
