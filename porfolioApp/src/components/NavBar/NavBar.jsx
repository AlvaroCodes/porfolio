import React, { useState } from 'react'
import './NavBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faFileArrowDown} from '@fortawesome/free-solid-svg-icons'


export const NavBar = () => {

    const [displayNavBar, setDisplayNavBar] = useState(false);

    const displayNav = () => {
        console.log(displayNavBar);
        setDisplayNavBar(!displayNavBar);
    }


    if (displayNavBar){

        return (
            <div className='navBar'>
        
                <div className='navBar__primary'>
                    <h1 className='logo'>
                        <span className='logo-color'>{'<'}</span>AC<span className='logo-color'>{'/>'}</span>
                    </h1>
        
                    <FontAwesomeIcon className='navBar__burger' onClick={ displayNav} icon={faBars} />
                </div>
                <nav className='navBar__nav'>
                    <a href="#" className='navBar__nav__link'>Home</a>
                    <a href="#" className='navBar__nav__link'>About</a>
                    <a href="#" className='navBar__nav__link'>Contact</a>
                    <a href="#" className='navBar__nav__link navBar__nav__link-cv'>
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
