import React from 'react'
import ContactText from './ContactText'
import Contactpic from './Contactpic'

const ContactMain = () => {
  return (
    <div id='contact' className='max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4'>
        <h1 className='text-5xl text-cyan-500 text-center mb-10'>Contact Me</h1>
        <div className='flex justify-between bg-lightbrown p-8 gap-16 rounded-2xl flex-col lg:flex-row'>
        <ContactText/>
        <Contactpic/>
        </div>
    </div>
  )
}

export default ContactMain