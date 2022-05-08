import React from 'react'
import ContactCard from '../components/ContactCard/ContactCard'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <h1 className='contact-title'>Contact</h1>

      <div className='contact-cards'>
        <ContactCard  nameIcon={faInstagram} url={'https://www.instagram.com/alvaro_codes/'}/>
        <ContactCard  nameIcon={faEnvelope} url={'mailto: aramirezdeveloper@gmail.com'}/>
        <ContactCard  nameIcon={faLinkedin} url={'https://www.linkedin.com/in/%C3%A1lvaro-ram%C3%ADrez-mart%C3%ADnez-51b674215/'}/>
        </div>
    </div>
  )
}

export default Contact