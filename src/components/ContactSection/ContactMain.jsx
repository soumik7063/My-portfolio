import React from 'react'
import ContactText from './ContactText'
import Contactpic from './Contactpic'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const ContactMain = () => {
  return (
    <motion.div
    variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
     id='contact' className='max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4'>
        <h1 className='text-5xl text-cyan-500 text-center mb-10'>Contact Me</h1>
        <div className='flex justify-between bg-lightbrown p-8 gap-16 rounded-2xl flex-col lg:flex-row'>
        <ContactText/>
        <Contactpic/>
        </div>
    </motion.div>
  )
}

export default ContactMain