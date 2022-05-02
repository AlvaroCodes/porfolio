import React from 'react'
import './About.css'
import { NavLink, Link} from "react-router-dom";

export const About = () => {
  return (
    <div className='about'>
        <section className='about__sections' to='/projects'>

            <NavLink className='about__sections-link' to='/projects'>
                <div className='about__sections-projects'>
                    <h1 className='about__sections-title'>Projects</h1>
                    <hr className='hr' />
                </div>
                
                <img src="./assets/projects.png" alt="img projects" />
            </NavLink>
        </section>

        <section className='about__sections'>
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
