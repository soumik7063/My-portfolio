import { fadeIn } from '../../framerMotion/variants'
import { motion } from "framer-motion";
const CPtext = () => {
  return (
    <motion.div
    variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
     className='flex flex-col justify-center items-center mt-[100px]'>
        <h2 className='text-cyan-600 text-5xl mb-10'>
            Competitive Programming
        </h2>
        <p className='text-white text-lg text-center'>My journey in competitive programming with 800+ problems solved across multiple platforms </p>
    </motion.div>
  )
}

export default CPtext