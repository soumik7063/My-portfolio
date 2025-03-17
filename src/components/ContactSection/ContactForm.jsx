import React, { useState } from 'react'
import { useRef } from 'react';
import {  toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
const ContactForm = () => {
  const [name,setname] = useState('');
  const[email,setemail] = useState('');
  const [message , setmessage] = useState('')
  const[success , setsuccess] = useState('')
  const handelName = (e)=>{
    setname(e.target.value)
    
  }
  const handelEmail = (e)=>{
    setemail(e.target.value)
    
  }
  const handelMessage = (e)=>{
    setmessage(e.target.value)
    
  }
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
              setname('');
              setemail('');
              setmessage('');
              setsuccess('Message sent !');
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
            <p className='text-green-600 text-xl'>{success}</p>
            <input value={name} onChange={handelName} name='from_name' required className='h-12 text-white rounded-lg px-2 bg-gray-500' type="text"  placeholder='Your Name'/>
            <input value={email} onChange={handelEmail} name='from_email' required className='h-12 text-white rounded-lg px-2 bg-gray-500' type="email" placeholder='Your Email'/>
            <textarea value={message} onChange={handelMessage} name='message' required className=' text-white rounded-lg px-2 bg-gray-500' rows={9} cols={15} placeholder='Describe briefly...'></textarea>
            <button className=' rounded-lg px-2 py-2 font-bold bg-blue-500 cursor-pointer hover:bg-cyan-500' type='submit'>Send</button>
        </form>
    </div>
  )
}

export default ContactForm