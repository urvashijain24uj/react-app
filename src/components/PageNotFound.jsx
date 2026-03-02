import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='text-center'>
      <h1 className='pt-30 text-4xl mb-3 font-semibold'>404 Page Not Found <br /> (Design from CodePen)</h1>
      <p className='text-xl my-5'>The page you are looking for does not exist.</p>

      <button className='py-4 px-8 rounded-lg text-xl font-semibold bg-amber-500 text-white cursor-pointer active:scale-95 hover:bg-amber-600' onClick={()=>navigate("/")}>Go back to Homepage</button>
    </div>
  )
}

export default PageNotFound
