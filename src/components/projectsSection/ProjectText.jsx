import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const ProjectText = () => {
  return (
    <motion.div 
    variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
    className='flex flex-col items-center mt-[100px]'>
        <h2 className='text-cyan-400 text-5xl mb-10'>
            Projects
        </h2>
        <p className='text-lg text-gray-400 text-center px-3'>
            I have worked on a variety of web development project , ranging from responsive website from basic to comples interface as well as logic
        </p>
    </motion.div>
  )
}

export default ProjectText