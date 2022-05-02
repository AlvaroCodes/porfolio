import React from 'react'
import ContactCard from '../components/ContactCard/ContactCard'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <h1 className='contact-title'>Contact</h1>

        <ContactCard nameIcon={faInstagram} url={'https://www.instagram.com/alvaro_codes/'}/>
        <ContactCard nameIcon={faEnvelope} url={'https://www.instagram.com/alvaro_codes/'}/>
        <ContactCard nameIcon={faLinkedin} url={'https://www.instagram.com/alvaro_codes/'}/>
    </div>
  )
}

export default Contact