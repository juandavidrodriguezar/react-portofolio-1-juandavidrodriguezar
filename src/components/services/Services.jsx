import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>How I can contribute</h5>
      <h2>Areas of Value</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>IoT Solutions</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Experience with connected systems, industrial data, and cloud-linked device workflows</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Time-series data, event monitoring, and information pipelines for operational environments</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Hands-on hardware background with Arduino, Microchip tools, and electronics design exposure</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integration of hardware, APIs, and cloud platforms to create usable end-to-end solutions</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Strong understanding of HTTP APIs, system connectivity, and digital product logic</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Machine Learning and AI Solutions</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Building practical machine learning solutions grounded in business or research needs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developing LLM applications that improve search, reasoning, and user interaction</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Designing retrieval-augmented generation systems connected to relevant knowledge sources</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Turning ambiguous AI ideas into structured experiments, prototypes, and iterations</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Combining quantitative reasoning with modern AI tooling to produce useful outcomes</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Communicating technical results clearly to both technical and non-technical stakeholders</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h3>Data Science and Analytical Thinking</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Engineering Physics foundation with strong mathematical and analytical intuition</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Experience working with datasets, data structures, and problem framing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Understanding of statistics, modeling concepts, and evidence-based decision making</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Critical thinking for turning noisy information into direction and insight</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>A habit of learning fast, validating ideas, and improving through iteration</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
