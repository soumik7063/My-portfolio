import React from 'react'
import { Link} from 'react-scroll';

const AmoutmeText = () => {
  return (
    <div className='flex flex-col md:items-start items-center md:text-left text-center'>
        <h1 className='text-5xl text-cyan-500 mb-10'>About me</h1>
        <p className='text-white md:text-xl'>
            I'am Soumik Ghatak currently a 3rd year Student in Information technology Department in Jalpaiguri Govt. Egnineering College. I specialize in Mern Stack Development.
            I have a made a realworld projects. I am also a Open source contributor, secure a rank 5th in JWOC open source program.Outside of Coding I enjoy continuous learing and sharing knowledge 
            with others to enrich my as well as other's knowledge
        </p>
        <Link 
        to='projects'
        smooth={true}
        spy={true}
        offset={-130}> <button className='text-2xl font-semibold bg-gray-800 cursor-pointer mt-5 border-2 border-cyan-600 px-3 py-2 rounded-xl hover:bg-gray-700 transition-all duration-300'>My Projects</button></Link>
    </div>
  )
}

export default AmoutmeText