import React from 'react'
import './about.css'
import ME from "../../assets/me-about.jpg"
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
            I'm 25 years old, physical engineer engaged with IoT technologies and IT world, currently working with edge2web and MindSphere Cloud from siemens, front and backend developments. Profoundly interested in self development and the human mind.  I speak english fluently.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About