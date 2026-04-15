import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/juan-david-rodriguez-3482091b2/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/juandavidrodriguezar" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.instagram.com/juandavidrodriguezar/" target="_blank" rel="noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials
