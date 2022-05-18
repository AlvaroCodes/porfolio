import React from 'react'
import './CardProjects.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLink} from '@fortawesome/free-solid-svg-icons'

import 'animate.css';

const CardProjects = ({value}) => {

    const {name = 'sin nombre', author = 'sin autor',subText = 'sin subtitulo', imgProject = 'sin imagen', technologies = [], urlGit = '/', urlWeb = '/', authorUrlImg = '/'} =  value;
  
    return (
        <div className='carrousel-projects'>
               <div className='project animate__animated animate__flipInX'>
                    <h2 className='project-title'>{name}</h2>
                    <p className='project-subText'>{subText}</p>
                    <img className='project-img' src={imgProject} alt={`imgen del proyecto ${name}`}/>
                
                    <div className='tecnologiesProjects'>
                        {
                            technologies.map((valueTech, index)=>{
                                 return (<p href='#' className={'tecnologiesProject'+' '+valueTech} >{valueTech}</p>)
                            })
                        } 
                    </div>

                    <div className='project-links'>
                        <a 
                        className='project-link' 
                        href={urlGit}>
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                        <a 
                        className='project-link'
                        href={urlWeb}>
                            <FontAwesomeIcon icon={faLink}/>
                        </a>

                        
                        
                    </div>

                    <div className='project-author'>
                        
                            <div className='project-author-Containerimg'>
                                <img className='project-author-img' src={authorUrlImg} alt={author} />
                            </div>
                           
                            <p>{author}</p>
                    </div>
                
                  </div>
        </div>
    )


    }



export default CardProjects