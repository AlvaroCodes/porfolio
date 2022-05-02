import React, { useEffect, useState } from 'react'
import CarouselImg from '../components/Carousel/CarouselImg/CarouselImg';
import createValue from '../components/Carousel/CarouselImg/createValue';


import './Projects.css';

import project from '../project'

const Projects = () => {
    const [pointer, setPointer] = useState(3);
  
    const pointUp = () => {
            if (pointer < project.length){
                setPointer(pointer + 3)
            }
           
    }

    const pointBack = () => {
            if ( pointer > 3){
                setPointer(pointer - 3)
            }
    }
    
    const mostrarProjects = () => {
        if (project.length > 3){
            return project.map((e, i)=>{
                if (i < pointer){
                    let objtValue = createValue(project, i);
                    return <CarouselImg value={objtValue} />;
                }
            })
        }else {
            return project.map((e, i)=>{
                    let objtValue = createValue(project, i);
                    return <CarouselImg value={objtValue} />;
            })
        }
    }


 if (project.length < 3) {
    return (
        <div className='projects'>
            <h1 className='projects-title'>Projects</h1>
    
                <div className='carrousel-projects'>
                    { mostrarProjects() }
                </div>
              
        </div>
      )
 } else {
    return (
        <div className='projects'>
            <h1 className='projects-title'>Projects</h1>
    
                <div className='carrousel-projects'>
                      { mostrarProjects() }
                </div>
              

            <div>
            {
                (pointer < project.length) ?
                    <button className='btn'  onClick={pointUp}>
                        More
                    </button>

               :null
            }

            <button className='btn'   onClick={pointBack}>
                Less
            </button>
            </div>  
          

        </div>
      )
 }

}

export default Projects