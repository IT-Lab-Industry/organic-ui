import React from 'react'

export default function FilterSkeletonLoader() {
  return (
    <div className="es_container py-8">
      <div className="flex  h-[80vh] p-5">
        <div className="w-1/5 mr-5 ">
          <div className="bg-gray-300 h-8 mb-4 rounded"></div>
          <div className="bg-gray-300 h-8 mb-4 rounded"></div>
          <div className="bg-gray-300 h-8 mb-4 rounded"></div>
          <div className="bg-gray-300 h-8 mb-4 rounded"></div>
          <div className="bg-gray-300 h-8 mb-4 rounded"></div>
          <div className="bg-gray-300 h-8 mb-4 rounded"></div>
          <div className="bg-gray-300 h-8 mb-4 rounded"></div>
          <div className="bg-gray-300 h-8 mb-4 rounded"></div>
          <div className="bg-gray-300 h-8 mb-4 rounded"></div>
          <div className="bg-gray-300 h-8 mb-4 rounded"></div>
          <div className="bg-gray-300 h-8 mb-4 rounded"></div>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="p-4 bg-white border border-gray-200 rounded shadow"
            >
              <div className="bg-gray-300 h-40 mb-4 rounded"></div>
              <div className="bg-gray-300 h-6 mb-2 rounded"></div>
              <div className="bg-gray-300 h-6 mb-2 rounded"></div>
              <div className="bg-gray-300 h-10 mt-auto rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
