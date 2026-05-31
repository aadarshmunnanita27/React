import React from 'react'
import { Outlet } from 'react-router-dom'

const MainHeader = () => {
  return (
    <div>
        <outlet/>
        This is my Home Page
    </div>
  )
}

export default MainHeader