import React from 'react'
import ContactForm from './ContactForm'

const ContactText = () => {
  return (
    <div className ="flex flex-col w-full">
        <h1 className='text-3xl text-yellow-500 mb-4'>Get in Touch</h1>
        <p className='text-white'>Fell free to reach out if you'd like to collaborate <br/>
            You are just few clicks away
        </p>
        <ContactForm/>
    </div>
  )
}

export default ContactText