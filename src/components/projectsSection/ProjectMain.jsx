import React from 'react'
import ProjectText from './ProjectText'
import SIngleProject from './SIngleProject'
const ProjectMain = () => {

    const projects = [
        {
            name:'Algotracks',
            year:'2025',
            tech:'React JS,Express,Node,MongoDB,Tailwind,Framer motion,Gemini',
            align:'right',
            link:'https://soumik7063.github.io/Tic-tac-toe/',
            image:'/images/website-img-1.jpg'
        },
        {
            name:'Tic-Tac-Toe',
            year:'2023',
            tech:'HTML,CSS, JS',
            align:'left',
            link:'https://soumik7063.github.io/Tic-tac-toe/',
            image:'/images/website-img-1.jpg'
        },
        {
            name:'Chessy-chess',
            year:'2023',
            tech:'HTML,CSS, JS',
            align:'right',
            link:'https://github.com/soumik7063/chessy-chess',
            image:'../../public/images/website-img-1.jpg'
        },
        {
            name:'Employee Management System',
            year:'2024',
            tech:'React JS',
            align:'left',
            link:'https://manage-yoru-employee.vercel.app/',
            image:'/images/website-img-1.jpg'
        },
        {
            name:'PortFolio',
            year:'2024',
            tech:'React JS , Framer Motion',
            align:'right',
            link:'https://my-portfolio-beta-six-66.vercel.app/',
            image:'/images/website-img-1.jpg'
        },
        {
            name:'Mern Auth App',
            year:'2024',
            tech:'React JS , MongoDB,Node',
            align:'left',
            link:'https://github.com/soumik7063/Mern-Authentication-App',
            image:'/images/website-img-1.jpg'
        }
    ]
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-3'>
        <ProjectText/>
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
            {
                projects.map((e,index)=>{
                    return <div key={index}>
                        <SIngleProject name={e.name} year= {e.year} tech={e.tech} align = {e.align} link = {e.link} image = {e.image}/>
                    </div>
                 })
            }
        </div>
    </div>
  )
}

export default ProjectMain