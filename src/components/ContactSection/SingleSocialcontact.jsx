import React from 'react'

const SingleSocialcontact = ({link,Icon}) => {
  return (
    <div className='flex'>
        <a href={link} className='text-white text-3xl hover:text-cyan-500 cursor-pointer border-2 border-orange-300 rounded-full p-2'> {Icon}</a>
    </div>
  )
}

export default SingleSocialcontact