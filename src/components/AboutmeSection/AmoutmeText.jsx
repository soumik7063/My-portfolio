import React from 'react'
import { Link} from 'react-scroll';

const AmoutmeText = () => {
  return (
    <div className='flex flex-col md:items-start items-center md:text-left text-center'>
        <h1 className='text-5xl text-cyan-500 mb-10'>About me</h1>
        <p className='text-white'>
            I'am Soumik Ghatak currently a 2nd year Student in Information technology Department in Jalpaiguri Govt. Egnineering College. I specialize in Mern Stack Development.
            I have a made a realworld projects. I am also a Open source contributor, secure a rank 5th in JWOC open source program.Outside of Coding I enjoy continuous learing and sharing knowledge 
            with others to enrich my as well as other's knowledge
        </p>
        <Link 
        to='projects'
        smooth={true}
        spy={true}
        offset={-130}
        class=" mt-5 rounded-full relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-bold transition-all  bg-white hover:bg-white group">
    <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
    <span class="relative w-full text-left text-black transition-colors duration-500 ease-in-out group-hover:text-white">My Projects</span>
</Link>
    </div>
  )
}

export default AmoutmeText