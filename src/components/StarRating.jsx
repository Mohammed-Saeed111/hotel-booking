import React from 'react'
import { assets } from '../assets/assets'

export const StarRating = ({rating = 4}) => {
  return (
    <div>
        <>
        {Array(5).fill('').map((_, index) => (
            <img 
              key={index} 
              src={rating > index ? assets.starIconFilled : assets.starIconOutlined} 
              alt="star-icon" 
              className='w-4.5 h-4.5 inline-block'
            />
         ))}
        </>
    </div>
  )
}
export default StarRating