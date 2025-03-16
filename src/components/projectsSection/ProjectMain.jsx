import React from 'react'
import ProjectText from './ProjectText'
import SIngleProject from './SIngleProject'
const ProjectMain = () => {

    const projects = [
        {
            name:'Tic-Tac-Toe',
            year:'2023',
            tech:'HTML,CSS, JS',
            align:'left',
            link:'#',
            image:'/images/website-img-1.jpg'
        },
        {
            name:'Chessy-chess',
            year:'2023',
            tech:'HTML,CSS, JS',
            align:'right',
            link:'#',
            image:'../../public/images/website-img-1.jpg'
        },
        {
            name:'Employee Management System',
            year:'2024',
            tech:'React JS',
            align:'left',
            link:'#',
            image:'/images/website-img-1.jpg'
        },
        {
            name:'PortFolio',
            year:'2024',
            tech:'React JS , Framer Motion',
            align:'right',
            link:'#',
            image:'/images/website-img-1.jpg'
        },
        {
            name:'Mern Auth App',
            year:'2024',
            tech:'React JS , MongoDB,Node',
            align:'left',
            link:'#',
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