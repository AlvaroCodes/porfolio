import React from 'react'
import './About.css'
import { NavLink } from "react-router-dom";

import 'animate.css';

export const About = () => {
  return (
    <div className='about'>
        <section className='about__sections animate__animated animate__fadeInLeft' to='/projects'>

            <NavLink className='about__sections-link' to='/projects'>
                <div className='about__sections-projects'>
                    <h1 className='about__sections-title '>Projects</h1>
                    <hr className='hr' />
                </div>
                
                <img src="./assets/projects.png" alt="img projects" />
            </NavLink>
        </section>

        <section className='about__sections animate__animated animate__fadeInRight'>
            <NavLink className='about__sections-link' to='/technology'>
            <div>
                <h1 className='about__sections-title'>Technology</h1>
                <hr className='hr' />
            </div>
          
            <img src="./assets/technology.png" alt="img technology" />
            </NavLink>
        </section>
    </div>
  )
}
