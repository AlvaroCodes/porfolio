import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ContactCard.css'
import 'animate.css';


const ContactCard = ({nameIcon, url}) => {
  return (
        <a className='contactCard animate__animated animate__flipInX' href={url}>
            <FontAwesomeIcon icon={nameIcon} />
        </a>
  )
}

export default ContactCard
