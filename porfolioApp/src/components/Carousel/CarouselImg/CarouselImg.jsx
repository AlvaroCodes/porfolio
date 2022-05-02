import React from 'react'
import './CarouselImg.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faLink} from '@fortawesome/free-solid-svg-icons'

const CarouselImg = ({value}) => {

    // console.log(value.subText);

    let content;

    if (value.subText){
        
        content = <div className='project'>
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
        content = <div className='tecnologia-header'>
             <h2>{value.name}</h2>
        
            <img 
            className='tecnologia-header--logo'
            src={value.imgTechnology} alt="" />
        </div>
    }

    return (
        <div>
                
                {content}   
             
        </div>
    )


    }



export default CarouselImg