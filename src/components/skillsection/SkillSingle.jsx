import React from 'react'
const SkillSingle = ({skill,icon}) => {
  return (
    <div className='hover:-translate-y-10 transition-all duration-500 rounded-t-full mx-2' >
        <div className='flex flex-col items-center justify-center gap-3'>
            <div className='bg-white text-cyan-500 h-[100px] w-[100px] rounded-full border-4 flex justify-center items-center text-6xl hover:text-gray-800 hover:scale-105 transform transition-all duration-500 border-orange-500 '>{icon}</div>
            <p className='text-white font-bold'>{skill}</p>
        </div>

    </div>
  )
}

export default SkillSingle