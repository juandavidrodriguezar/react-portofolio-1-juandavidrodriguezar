import React from 'react'
import './about.css'
import ME from "../../assets/me-about.jpeg"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </article>
            <article className='about__card'>
              <FiUsers className="about__icon"/>
              <h5>Interdisciplinary</h5>
              <small>20+ Interdisciplinary projects</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className="about__icon"/>
              <h5>Skills</h5>
              <small>10+ Digital skills</small>
            </article>
          </div>

          <p>
I come from an Engineering Physics background and I’m currently doing a Master of Data Science at University of Technology Sydney. I’m really interested in the intersection between deep theory and real world AI so I’ve been building things like machine learning models, LLM applications, and RAG systems.

What drives me is taking complex data or abstract concepts and turning them into useful, real solutions. That’s where I feel I bring the most value.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
