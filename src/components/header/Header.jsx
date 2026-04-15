import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <p className='header__eyebrow'>Data science + AI</p>
        <h5>Hello, I'm</h5>
        <h1>Juan</h1>
        <h3 className="text-light">Physicist and Data Scientist shaping intelligent creations through AI, data, and connected technologies.</h3>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt="me"/>
        </div>

        <div className='header__cards'>
          <article>
            <strong>3+</strong>
            <span>Years across engineering, software, and problem solving</span>
          </article>
          <article>
            <strong>AI + Data</strong>
            <span>Machine learning, LLM applications, and analytical thinking</span>
          </article>
          <article>
            <strong>Physics x Intelligence</strong>
            <span>A scientific mindset applied to real-world intelligent systems</span>
          </article>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
