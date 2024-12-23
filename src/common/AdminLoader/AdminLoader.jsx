import React from 'react'
import { FaSpinner } from 'react-icons/fa6'

export default function AdminLoader() {
  return (
    <div className="flex justify-center items-center h-screen dark:bg-[#1C222B]">
      <FaSpinner className="animate-spin text-4xl dark:text-white" />
    </div>
  )
}
