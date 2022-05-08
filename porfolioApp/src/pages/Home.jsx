import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

import 'animate.css';
import './Home.css'

const Home = () => {
  return (
    <section className='home'>

<div className="card animate__animated animate__pulse">
  <div className="card2">

      <img className='home--img' src="https://media-exp1.licdn.com/dms/image/C4E03AQHBN601xnE9nw/profile-displayphoto-shrink_800_800/0/1627928010372?e=1657152000&v=beta&t=wLjIi2E4Tb6VBsfdbbPVBLBID5ZINZUQPV_zUwyUCRs" alt="Foto Perfil" />

    <div className='card-text'>
      <h1>Hi!</h1>
      <h1>I'm Álvaro Ramírez FullStack Developer</h1>
    </div>
      

      <div  className='container-icon'>
         
      <a className='icon' href="https://github.com/AlvaroCodes">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className='icon' href="https://www.linkedin.com/in/%C3%A1lvaro-ram%C3%ADrez-mart%C3%ADnez-51b674215/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
         
         </div>
 
  </div>
</div>

    </section>
  )
}

export default Home