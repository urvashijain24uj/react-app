import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='fixed top-0 left-0 w-full bg-white shadow-md py-4 px-12 z-10'>
      <nav className='flex justify-between'>
        <h3 className='text-2xl text-gray-400'>Logo</h3>

        <div className='flex gap-6 font-medium text-gray-500'>
          <button className='cursor-pointer hover:text-gray-700' onClick={() => navigate("/")}>Go to home</button>
          <button className='cursor-pointer hover:text-gray-700' onClick={() => navigate(-1)}>Back</button>
          <button className='cursor-pointer hover:text-gray-700' onClick={() => navigate(+1)}>Next</button>
        </div>

        <div className='flex gap-8 text-lg'>
          <NavLink to="/" className={({isActive})=> isActive?"text-blue-700":""}>
             Hero
          </NavLink>
          <NavLink to="/job-portal" className={({isActive})=> isActive?"text-blue-700":""}>
             Job Portal
          </NavLink>
          <NavLink to="/notes" className={({isActive})=> isActive?"text-blue-700":""}>
             Notes
          </NavLink>
          <NavLink to="/get-data" className={({isActive})=> isActive?"text-blue-700":""}>
             Get Data
          </NavLink>
          <NavLink to="/products" className={({isActive})=> isActive?"text-blue-700":""}>
             Products
          </NavLink>
          <NavLink to="/courses" className={({isActive})=> isActive?"text-blue-700":""}>
             Courses
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Header
