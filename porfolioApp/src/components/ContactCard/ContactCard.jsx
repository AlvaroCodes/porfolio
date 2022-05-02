import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ContactCard.css'

const ContactCard = ({nameIcon, url}) => {
  return (
        <a className='contactCard' href={url}>
            <FontAwesomeIcon icon={nameIcon} />
        </a>
  )
}

export default ContactCard
