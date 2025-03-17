import React from 'react'
import { Link} from 'react-scroll';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const FooterRight = () => {
    const links = [
        {links:'About Me' , section:'about'},
        {links:'Skills' , section:'skills'},
        {links:'Experience' , section:'experience'},
        {links:'Projects' , section:'projects'},
        {links:'Contact' , section:'contact'}
    ]
  return (
    <motion.div
    variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
    >
       <ul className='flex gap-4'>
        {
            links.map((link,index)=>{
                return <li key={index}>
                    <Link
                    to={link.section}
                    smooth={true}
                    spy={true}
                     className='text-gray-500 text-md lg:text-xl cursor-pointer' >{link.links}</Link>
                </li>
            })
        }
       </ul>
       <h3 className='text-sm text-gray-400 text-right '>All rights reserved</h3>
    </motion.div>
  )
}

export default FooterRight