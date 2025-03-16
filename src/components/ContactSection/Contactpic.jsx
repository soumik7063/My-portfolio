import React from 'react'
import ContactInfo from './ContactInfo'
import SocialContact from './SocialContact'
const Contactpic = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-3'>
        <img className='max-h-[300px]' src="./images/email-image.png" alt="contact us" />
        <div>
            <ContactInfo/>
            <SocialContact/>
        </div>
    </div>
  )
}

export default Contactpic