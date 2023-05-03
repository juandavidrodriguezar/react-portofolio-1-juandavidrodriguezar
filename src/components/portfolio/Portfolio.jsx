import React from 'react'
import './portfolio.css'
import IMG2 from '../../assets/PHYS.jpg'
import IMG3 from '../../assets/ultraflow.jpg'
import IMG4 from '../../assets/tpvivint.jpg'
import IMG5 from '../../assets/zfccaci.JPG'
import IMG7 from '../../assets/books.JPG'
import TP from '../../assets/tpvivint.pdf'
import TUTOR from '../../assets/tutor.pdf'
import INTERN from '../../assets/intern.pdf'
import ACI from '../../assets/acizfcc.pdf'
import PERSONAL from '../../assets/personaldev.pdf'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt=''/>
          </div>
          <h3>Academic tutor in the mechanical physics laboratory of the university </h3>
          <div className='portfolio_item-cta'>
            <a href={TUTOR} download className='btn'>Download info</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt=''/>
          </div>
          <h3>Internship IoT student</h3>
          <div className='portfolio_item-cta'>
            <a href={INTERN} download className='btn'>Download info</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt=''/>
          </div>
          <h3>Customer support specialist in Teleperformance Colombia for Vivint Smart home</h3>
          <div className='portfolio_item-cta'>
            <a href={TP} download className='btn'>Download info</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt=''/>
          </div>
          <h3>Software engineer A&CI GROUP</h3>
          <div className='portfolio_item-cta'>
            <a href={ACI} download className='btn'>Download info</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG7} alt=''/>
          </div>
          <h3>Personal development</h3>
          <div className='portfolio_item-cta'>
            <a href={PERSONAL} download className='btn'>Download info</a>
          </div>
        </article>
       </div>
    </section>
  )
}

export default Portfolio