import React from 'react'
import './CardProjects.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLink} from '@fortawesome/free-solid-svg-icons'

import 'animate.css';

const CardProjects = ({value}) => {

     console.log(value);

    return (
        <div className='carrousel-projects'>
               <div className='project animate__animated animate__flipInX'>
                    <h2 className='project-title'>{value.name}</h2>
                    <p className='project-subText'>{value.subText}</p>
                    <img className='project-img' src={value.imgProject} alt={`imgen del proyecto ${value.name}`}/>
                
                    <div className='tecnologiesProjects'>
                        {
                            value.technologies.map((valueTech, index)=>{
                                 return (<p href='#' className={'tecnologiesProject'+' '+valueTech} >{valueTech}</p>)
                            })
                        } 
                    </div>

                    <div className='project-links'>
                        <a 
                        className='project-link' 
                        href={value.urlGit}>
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                        <a 
                        className='project-link'
                        href={value.urlWeb}>
                            <FontAwesomeIcon icon={faLink}/>
                        </a>
                    </div>
                
                  </div>
        </div>
    )


    }



export default CardProjects