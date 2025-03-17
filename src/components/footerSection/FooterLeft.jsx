import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const FooterLeft = () => {
  return (
    <motion.div
    variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
    >
        <h1 className='text-2xl lg:text-3xl text-gray-400 mt-10'>Soumik Ghatak</h1>
    </motion.div>
  )
}

export default FooterLeft