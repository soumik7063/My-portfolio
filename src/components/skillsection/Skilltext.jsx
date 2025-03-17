import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const Skilltext = () => {
  return (
    <motion.div
    variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
     className='flex flex-col justify-center items-center mt-[100px]'>
        <h2 className='text-cyan-600 text-5xl mb-10'>
            My Skills
        </h2>
        <p className='text-white text-lg text-center'>I am not only work this these technologies but excellent in using them with best practices to deliver high-quality result , I have been wokring with all these to build my portfolio website </p>
    </motion.div>
  )
}

export default Skilltext