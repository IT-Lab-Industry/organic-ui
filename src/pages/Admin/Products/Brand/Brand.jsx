import { GoHome } from 'react-icons/go'
import { useSelector } from 'react-redux'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { useState } from 'react'
import Breadcrumbs from '../../../../common/Breadcrumbs/Breadcrumbs'
import EditBrand from './EditBrand'
import { RxCross1 } from 'react-icons/rx'




import BrandStatusToggleButton from './BrandStatusToggleButton'

export default function Brand() {
  const [isOpen, setIsOpen] = useState(false)

  const isDarkMode = useSelector(state => state.theme.isDarkMode)


 




 

  // Breadcrumbs
  const pageTitle = 'Brand'
  const productLinks = [
    { title: <GoHome />, link: '/' },
    { title: 'Products' },
    { title: 'Brand' },
  ]

  // handle modal
  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }



  return (
    <section
      className={`main-container ${isDarkMode ? 'bg-darkColorBody' : 'bg-lightColorBody'}`}
    >
      <Breadcrumbs title={pageTitle} breadcrumbs={productLinks} />
      <div className="lg:flex gap-5">
        <div
          className={`px-5 py-5 rounded lg:w-[40%] w-full max-h-[650px] ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          <div className="flex gap-5 pb-5">
            <div
              className={` w-full py-5 rounded ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
            >
              <form className="px-5">
                <h2 className="text-2xl font-bold mb-4">Add New Brand</h2>
                <div className="mb-4">
                  <label
                    htmlFor="productName"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Brand Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="productName"
                     
                      placeholder="Enter brand name"
                      className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                    />
                    
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="productName"
                    className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    Priority
                  </label>
                  <input
                    type="number"
                    id="productName"
                    priority
                    placeholder="Enter Meta Title"
                    className={`form-control mt-1 p-3  border block w-full shadow-sm sm:text-sm  rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText ' : 'bg-lightColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
                  />
                </div>

                {/* Media */}
                <div className="mb-4">
                  <label
                    htmlFor="productName"
                    className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
                  >
                    File Upload
                  </label>
                  <input
                    type="file"
                    name="image"
             
                    className={`w-full text-sm border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4  rounded focus:outline-none  focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard file:bg-primaryColor border-primaryColor text-lightColor file:text-black ' : 'bg-lightColor hover:border-primaryColor/50 file:text-white file:bg-primaryColor file:hover:bg-primaryColor/90 border-primaryColor/30 text-black'}`}
                  />

                 
                </div>

                <button
                  type="submit"
                  className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-tr from-indigo-600 to-indigo-500 border-indigo-700 text-white"
                >
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-20 opacity-10"></span>
                  <span className="relative">+ Submit</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div
          className={`px-5 py-5 rounded lg:w-[60%] w-full ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          {/* search product and Brand */}
          <div className="flex items-center justify-between gap-6 py-3 ">
            <h2 className="lg:text-2xl text-lg font-bold mb-4">Brand List</h2>
            <div className="search flex items-center gap-5">
              <div
                className={` rounded-md flex items-center justify-between border border-[#4800C9] ${isDarkMode ? 'text-darkColorText ' : 'bg-[#ffffff]'}`}
              >
                <input
                  type="search"
                  className={`py-2 pl-3  bg-transparent w-full focus:outline-none cursor-pointer ${isDarkMode ? 'placeholder:text-slate-400' : 'placeholder:text-textColor'}`}
                  placeholder="Type Name & Enter"
                />
                <button className="btn mt-0 rounded-[0px] rounded-r-md px-3">
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </div>
            </div>
          </div>

          {/* Brand table*/}
          <div className="py-5">
            <div className="container mx-auto overflow-x-auto">
              <table
                id="data-table"
                className={`min-w-full border  table-auto  ${isDarkMode ? 'border-darkColorBody' : 'border-gray-200 divide-y divide-gray-200'}`}
              >
                <thead
                  className={`${isDarkMode ? 'bg-[#131A26]' : 'bg-gray-100'}`}
                >
                  <tr>
                    <th className="p-2">
                      <p>#</p>
                    </th>
                    <th
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      Logo
                    </th>
                    <th
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      NAME
                    </th>

                    <th
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      STATUS
                    </th>
                    <th
                      className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${isDarkMode ? 'text-lightColor' : 'text-gray-500'}`}
                    >
                      ACTIONS
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {/* {isLoading ? (
                    <>Loading...</>
                  ) : (
                    <>
                     
                    </>
                  )} */}

                
                    <tr >
                      <td className="p-2 text-center">1</td>
                      <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                        <div
                          className={` rounded-md p-1 ${isDarkMode ? 'bg-[#131A26]' : 'bg-[#f2f2f3]'}`}
                        >
                          <img
                            src=""
                            alt=""
                            className="w-[40px] h-[40px]"
                          />
                        </div>
                      </td>
                      <td
                        className={`px-6 py-4 text-[13px] whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                       hj
                      </td>

                      <td
                        className={`px-6 py-4 whitespace-nowrap ${isDarkMode ? 'text-lightColor' : 'text-textColor'}`}
                      >
                        <BrandStatusToggleButton
                          label="Toggle Button Label"
                         
                        />
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={handleOpenModal}
                            className="focus:outline-none transition-all duration-100 p-2 rounded bg-[#60a5fa1a] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-lightColor"
                          >
                            <FiEdit className=" text-[12px] " />
                          </button>
                          {isOpen && (
                            <div className="fixed inset-0 bg-gray-800/10 transition-all duration-300 z-50">
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full max-w-5xl rounded-md p-4">
                                <EditBrand />
                                <button
                                  onClick={handleCloseModal}
                                  className="absolute top-2 right-2 focus:outline-none transition-all duration-300 p-2 rounded bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor"
                                >
                                  <RxCross1 size={20} />
                                </button>
                              </div>
                            </div>
                          )}
                          <button
                          
                            className="focus:outline-none transition-all duration-300 p-2 rounded bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-lightColor"
                          >
                            <RiDeleteBin7Line className="text-[12px]" />
                          </button>
                        </div>
                      </td>
                    </tr>
                 
                </tbody>
              </table>
            </div>
            <br />
        
          </div>
        </div>
      </div>
    </section>
  )
}
