import React, { useEffect, useState } from 'react'
import './Filter.css'
import { FaArrowAltCircleRight, FaStar } from 'react-icons/fa'
import axios from 'axios'

export default function FilterMenu({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  setProducts,
  setError,
}) {
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

  const colors = [
    { name: 'Red', code: '#FF0000' },
    { name: 'Green', code: '#00FF00' },
    { name: 'Blue', code: '#0000FF' },
    { name: 'Yellow', code: '#FFFF00' },
    { name: 'Black', code: '#000000' },
    { name: 'White', code: '#FFFFFF' },
    // Add more colors as needed
  ]

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
    <section
      className={
        'fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ' +
        (isMobileMenuOpen
          ? 'transition-opacity opacity-100 duration-500 translate-x-0'
          : 'transition-all delay-500 opacity-0 translate-x-full')
      }
    >
      <div
        className={
          'w-[90vw] max-w-lg top-[118px] left-0 absolute bg-white rounded h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform ' +
          (isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full')
        }
      >
        <article className="relative w-[90vw] max-w-md pb-10 flex flex-col  space-y-6 overflow-y-scroll h-full">
          <div className="flex items-center px-4 justify-between">
            <div></div>
            <FaArrowAltCircleRight
              onClick={() => {
                setIsMobileMenuOpen(false)
              }}
              className=" border ml-5 mt-5 rounded-full w-8 h-8  text-ftPrimaryColor"
            />
          </div>
          <div
            className="w-[350px] mx-auto border  rounded"
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
        </article>
      </div>
      <div
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          setIsMobileMenuOpen(false)
        }}
      ></div>
    </section>
  )
}
