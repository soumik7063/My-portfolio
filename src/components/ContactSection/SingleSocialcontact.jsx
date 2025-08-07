import React from 'react'

const SingleSocialcontact = ({link,Icon,name}) => {
  return (
    <div className='flex'>
        <a href={link} className={`text-white text-3xl 
          ${(name==='github') && 'hover:text-gray-800'} 
          ${(name==='instagram') && 'hover:text-pink-500'} 
          ${(name==='linkedin') && 'hover:text-blue-400'} 
          cursor-pointer border-2 border-orange-300 rounded-full p-2`}> {Icon}</a>
    </div>
  )
}

export default SingleSocialcontact