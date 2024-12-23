import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { IoCloseOutline } from 'react-icons/io5'
import Button from '../../../../common/Button/Button'
import images from '../../../../assets/img/images'

export default function LaundryModal({ handleSubmit }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  // File Upload
  const handleFileChange = event => {
    const file = event.target.files[0]
    setSelectedFile(file)
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setPreviewUrl(imageUrl)
    }
  }

  const handleCancelUpload = () => {
    setSelectedFile(null)
    setPreviewUrl(null)
  }

  return (
    <div
      className={`px-3  rounded w-full ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
    >
      <div className="flex gap-5">
        <div
          className={` w-full py-5 rounded ${isDarkMode ? 'bg-darkColorCard text-darkColorText' : 'bg-lightColor text-lightColorText '}`}
        >
          <div className="px-3">
            <h2 className="text-2xl font-bold mb-4">Laundry Service Form</h2>
            <figure className="max-w-lg mx-auto">
              <img
                src={images.laundrymodal}
                alt=""
                className="w-full rounded-md"
              />
            </figure>
            <p className="text-gray-500 py-2 text-[14px]">
              <span className="text-error-200 font-semibold"> Note :</span>{' '}
              লন্ড্রি হোম সার্ভিস নিতে call a rider বাটন টি প্রেস করুন। আপনার
              কোন মতামত থাকলে মতামত লিখে submit এ ক্লিক করুন। ৬ ঘন্টার ভিতর
              জামাকাপর পিক & লন্ড্রি করে আপনার বাসায় পৌছানো হবে। Service Name
            </p>
            <div className="mb-4">
              <label
                className={`block text-sm font-medium ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                Description
              </label>
              <textarea
                rows="4"
                // placeholder="Meta Description"
                className={`mt-1 p-3  border block w-full shadow-sm sm:text-sm  rounded-md  ${isDarkMode ? 'bg-darkColorCard border-darkColorBody text-darkColorText focus:outline-none' : 'text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-primaryColor hover:border-primaryColor/80 hover:transition-all duration-200'}`}
              ></textarea>
            </div>

            {/* Media */}
            <div className="mb-5">
              <label
                htmlFor="productName"
                className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-darkColorText' : 'text-gray-700'}`}
              >
                File Upload
              </label>
              <input
                type="file"
                id="productName"
                name="productName"
                onChange={handleFileChange}
                className={`w-full text-sm border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4  rounded focus:outline-none  focus:border-primaryColor ${isDarkMode ? 'bg-darkColorCard file:bg-primaryColor border-primaryColor text-lightColor file:text-black ' : 'bg-lightColor hover:border-primaryColor/50 file:text-white file:bg-primaryColor file:hover:bg-primaryColor/90 border-primaryColor/30 text-black'}`}
              />

              {previewUrl && (
                <div className="mt-4 flex items-center  relative ">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-36 h-36 mr-2 mb-2 border rounded "
                  />
                  <IoCloseOutline
                    onClick={handleCancelUpload}
                    className=" text-[17px] bg-primaryColor text-white hover:text-white hover:bg-error-200 transition-all duration-200 cursor-pointer rounded -mt-[133px] relative -left-6"
                  />
                </div>
              )}
            </div>

            <Button
              text="Submit"
              className="bg-primaryColor py-3 px-4 rounded text-white text-[14px] flex gap-2 items-center"
              icon={FaPlus}
              onClick={handleSubmit}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  )
}
