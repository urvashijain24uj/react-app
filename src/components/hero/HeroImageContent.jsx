import React from 'react'
import ImageCard from './ImageCard'

const HeroImageContent = (props) => {
  return (
    <div id='rightImgContent' className='w-2/3 h-full flex items-center gap-7 overflow-x-auto'>
      {props.users.map((emp, idx) => (
        // <ImageCard id={idx} key={idx}
        //   imgPath={emp.imgPath} description={emp.description} tag={emp.tag} color={emp.color} />
        <ImageCard id={idx} key={idx}
          {...emp} />
      ))} 
    </div>
  )
}

export default HeroImageContent
