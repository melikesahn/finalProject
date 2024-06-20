
import React from 'react'
import { Outlet } from 'react-router-dom'
import ContentSideBar from './ContentSideBar'
const DashboardLayout = () => {
  return (
    <div className='my-16 px-4 lg:px-24 flex gap-4 flex-col md:flex-row'>
   <ContentSideBar/>
      <Outlet/>
    </div>
  )
}

export default DashboardLayout
