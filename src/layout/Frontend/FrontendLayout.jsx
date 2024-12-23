import { Outlet } from 'react-router-dom'
import FrontendHeader from '../../shared/Frontend/FrontendHeader'
// import { useEffect, useState } from 'react'
// import Loader from '../../common/Loader/Loader'
import FrontendFooter from '../../shared/Frontend/FrontendFooter'

export default function FrontendLayout() {
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 2000)
  // }, [])
  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : (
        <>
         
        </>
      )} */}

      <FrontendHeader />
      <Outlet />
      <FrontendFooter />
    </>
  )
}
