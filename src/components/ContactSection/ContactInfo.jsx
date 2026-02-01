import React from 'react'
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
const ContactInfo = () => {
  return (
    <div className='mt-10 text-gray-400'>
        <p className='flex gap-3 text-lg'><IoIosCall /> 7063804749</p>
        <p className='flex gap-3 text-lg'><CiMail /> soumikghatak7063@gmail.com</p>
        <p className='flex gap-3 text-lg'><FaLocationDot /> Jalpaiguri , 735102 , West Bengal</p>
    </div>
  )
}

export default ContactInfo