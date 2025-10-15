import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'
const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left text-center p-3'>
        <motion.h2 
        variants={fadeIn('down',0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{once:false,amount:0}}
        className='lg:text-2xl text-xl  uppercase text-cyan-500'>Mern Stack developer & AI-ML Enthusiast</motion.h2>
        <motion.h1 
        variants={fadeIn('right',0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{once:false,amount:0}}
        className='md:text-[12.8rem] lg:text-6xl text-4xl font-bold font-roboto text-orange-500'>Soumik Ghatak</motion.h1>
        <motion.p 
        variants={fadeIn('up',0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{once:false,amount:0}}
        className='text-lg mt-4 text-white'>A passionate Mern Stack Developer and instructor <br/> with 1yr experience</motion.p>
    </div>
  )
}

export default HeroText 