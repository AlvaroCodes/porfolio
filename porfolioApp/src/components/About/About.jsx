import React from 'react'
import './About.css'

export const About = () => {
  return (
    <div className='about'>
        <section className='about__sections'>
            <div className='about__sections-projects'>
                <h1 className='about__sections-title'>Projects</h1>
                <hr className='hr' />
            </div>
            
            <img src="./assets/projects.png" alt="img projects" />
        </section>

        <section className='about__sections'>
            <div>
                <h1 className='about__sections-title'>Technology</h1>
                <hr className='hr' />
            </div>
          
            <img src="./assets/technology.png" alt="img technology" />
        </section>
    </div>
  )
}
