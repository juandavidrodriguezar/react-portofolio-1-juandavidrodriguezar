import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>IoT Solutions</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Experience in Mindsphere IIoT cloud and aws basics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Time-series data and event tables storing </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Hardware skills: MPLAB-microchip, Arduino, EAGLE-Autodesk</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integration of hardware with MATHLAB-ThingSpeak through APIs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Understanding of HTTP based APIS and APIrestful</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Solid foundamentals in front-end technologies</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Experience in Low-Code Application Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Edge2web platform</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database Understanding</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Solid fundamentals in back-end technologies</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>knowledge of libraries and frameworks</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Data Analysis and Visualization</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Profesional background in physics and math</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Experience in manipulating data structures</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Understanding of Statistics and Machine Learning Algorithms</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Critical thinking and presentation skills</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Solid fundamentals of metrology</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
