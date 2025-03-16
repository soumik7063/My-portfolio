import React from 'react'
import { useRef } from 'react';
import {  toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
const ContactForm = () => {
    const notify = () => toast.success("Send Successfully");  

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_2fw6pwu', 'template_kv2dnhs', form.current, {
            publicKey: 'EhRPUoZqNojK8L-x-',
          })
          .then(
            () => {
                notify();
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4 mt-4'>
            <input name='from_name' required className='h-12 text-white rounded-lg px-2 bg-gray-500' type="text"  placeholder='Your Name'/>
            <input name='from_email' required className='h-12 text-white rounded-lg px-2 bg-gray-500' type="email" placeholder='Your Email'/>
            <textarea name='message' required className=' text-white rounded-lg px-2 bg-gray-500' rows={9} cols={15} placeholder='Describe briefly...'></textarea>
            <button className=' rounded-lg px-2 py-2 font-bold bg-blue-500 cursor-pointer hover:bg-cyan-500' type='submit'>Send</button>
        </form>
    </div>
  )
}

export default ContactForm