import React from 'react'
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
const SIngleProject = ({name,year,align,tech,link, image}) => {
  return (
    <div className={`w-full flex flex-col-reverse items-center gap-8 ${align === 'left' ?'md:flex-row' :'md:flex-row-reverse'} justify-end`}>
        <div>
            <h2 className='text-2xl md:text-3xl text-yellow-600 '>{name}</h2>
            <h2 className={`text-2xl font-thin text-white text-center ${align === 'left'?'md:text-right':'md:text-left'}`}>{year}</h2>
            <h2 className={`text-xl font text-cyan-500 text-center ${align === 'left'?'md:text-right':'md:text-left'}`}>{tech}</h2>
            <a href={link} className={`flex gap-1 justify-center text-xl ${align === 'left'?'md:justify-self-end':'md:justify-self-start'} cursor-pointer items-center text-white bg-black rounded-xl py-1 px-3`}> 
                view <BiSolidRightTopArrowCircle />
            </a>
        </div>
        <div className='max-h-[220px] max-w-[400px] rounded-xl overflow-hidden scale-110 '>
            <div className='w-full h-full bg-cyan-200 opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500'></div>
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default SIngleProject