import React, { useEffect, useState } from 'react'
import SideBar from './SideBar/SideBar'
import MainContent from './MainContent/MainContent'
import Loader from '../../common/Loader/Loader'


export default function DashboardLayout() {
  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  // Determine initial state of isSideBarOpen based on device type
  const [isSideBarOpen, setIsSideBarOpen] = useState()

  // Function to toggle sidebar open/close
  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex h-screen">
          <SideBar isSideBarOpen={isSideBarOpen} />
          <MainContent
            isSideBarOpen={isSideBarOpen}
            toggleSidebar={toggleSidebar}
          />
        </div>
      )}
    </>
  )
}
