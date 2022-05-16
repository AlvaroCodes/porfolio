import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

import './NavBar.css';

import Pdf from './Curriculum.pdf';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faFileArrowDown} from '@fortawesome/free-solid-svg-icons'


export const NavBar = () => {

    const [displayNavBar, setDisplayNavBar] = useState(false);

    const displayNav = () => {
        console.log(displayNavBar);
        setDisplayNavBar(!displayNavBar);
    }

 


    if (displayNavBar || window.screen.width >= 768){

        return (
            <div className= {( window.screen.width < 768) ? 'navBar' : 'navBar navBar-window '} >
        
                <div className='navBar__primary'>

                    <h1 className='logo' >
                    
                            <span className='logo-color'>{'<'}</span>AC<span className='logo-color'>{'/>'}</span>
                    </h1>
              
        
                    {
                        ( window.screen.width < 768) ? <FontAwesomeIcon className='navBar__burger' onClick={ displayNav} icon={faBars} /> : null
                    }
                   
                </div>
                <nav className={ ( window.screen.width < 768) ? 'navBar__nav' : 'navBar__nav-window'}>
                    <NavLink to="/" className={({isActive}) => 'navBar__nav__link '+ ( isActive ? 'active' : '' )}>Home</NavLink>
                    <NavLink to="/technology" className={({isActive}) => 'navBar__nav__link '+ ( isActive ? 'active' : '' )}>Technology</NavLink>
                    <NavLink to="/projects" className={({isActive}) => 'navBar__nav__link '+ ( isActive ? 'active' : '' )}>Project</NavLink>
                    
                    <NavLink to="/Contact" className={({isActive}) => 'navBar__nav__link '+ ( isActive ? 'active' : '' )}>Contact</NavLink>
                    <a href={Pdf} className='navBar__nav__link navBar__nav__link-cv' target = "_blank" download='curriculum'>
                        <FontAwesomeIcon className='navBar_nav_link-cv_svg' icon={faFileArrowDown} />
                        <p>CV</p>
                    </a>
                </nav>
            </div>
          )

    }else {
        return (
            <div className='navBar'>
        
                <div className='navBar__primary'>
                    <h1 className='logo'>
                        <span className='logo-color'>{'<'}</span>AC<span className='logo-color'>{'/>'}</span>
                    </h1>
                    <FontAwesomeIcon className='navBar__burger' onClick={displayNav} icon={faBars} />
                </div>
            </div>
          )
    }
}
