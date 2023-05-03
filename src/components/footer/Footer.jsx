import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {GrLinkedinOption} from 'react-icons/gr'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Juan David Rodriguez</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/juandavid.rodriguezarciniegas.3/' target='_blank'><FaFacebookF/></a>
        <a href='https://www.instagram.com/juandavidrodriguezar/' target='_blank'><FiInstagram/></a>
        <a href='https://www.linkedin.com/in/juan-david-rodr%C3%ADguez-arciniegas-3482091b2/' target='_blank'><GrLinkedinOption/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Juan David Rodriguez. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer