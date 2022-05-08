import React from 'react'
import './CarouselImg.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLink} from '@fortawesome/free-solid-svg-icons'


import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";

import 'animate.css';

const CarouselImg = ({value}) => {

    


     console.log(value);

    let content;

    if (value.subText){
        
        content = <div className='project animate__animated animate__bounceIn'>
                    <h2 className='project-title'>{value.name}</h2>
                    <p className='project-subText'>{value.subText}</p>
                    <img className='project-img' src={value.imgTechnology} alt="" />
                
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
                
                  </div>;
    }else {

       
        content = 
        <CSSTransition timeout={300} classNames="example">
        <div className='tecnologia-header animate__animated animate__bounceIn'>
             <h2>{value.name}</h2>
        
            <img 
            className='tecnologia-header--logo'
            src={value.imgTechnology} alt="prueba" />
        </div>
        
        </CSSTransition>
        
    }

    return (
        <div className='carrousel-projects'>
                
                {content}   
             
        </div>
    )


    }



export default CarouselImg