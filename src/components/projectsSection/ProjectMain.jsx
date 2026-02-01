import React from 'react'
import ProjectText from './ProjectText'
import SIngleProject from './SIngleProject'
import { projects } from '../../data/projects'
const ProjectMain = () => {

    
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-3'>
        <ProjectText/>
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
            {
                projects.map((e,index)=>{
                    return <div key={index}>
                        <SIngleProject name={e.name} year= {e.year} tech={e.tech} align = {index} link = {e.link} image = {e.image}/>
                    </div>
                 })
            }
        </div>
    </div>
  )
}

export default ProjectMain