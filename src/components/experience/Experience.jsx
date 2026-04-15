import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Tools and capabilities</h5>
      <h2>Technical Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Machine Learning and AI</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>Machine Learning</h4>
                <small className='text-light'>Modeling, experimentation, and applied problem solving</small>
              </div>  
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>Large Language Models</h4>
                <small className='text-light'>Prompt design, LLM apps, and practical AI workflows</small>
              </div>  
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>RAG Systems</h4>
                <small className='text-light'>Retrieval-based solutions grounded in real information</small>
              </div>  
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>Statistics and Analytics</h4>
                <small className='text-light'>Solid quantitative foundation for data-driven decisions</small>
              </div>  
            </article>
          </div>
        </div>

        <div className='experience__backend'>
          <h3>Data and Engineering Foundations</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Core language for data workflows and intelligent systems</small>
              </div>  
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>Data Wrangling</h4>
                <small className='text-light'>Cleaning, structuring, and preparing data for insight or modeling</small>
              </div>  
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>SQL and Databases</h4>
                <small className='text-light'>Working with structured data, queries, and analysis-ready datasets</small>
              </div>  
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>Research Mindset</h4>
                <small className='text-light'>Comfortable exploring, validating, and learning complex concepts fast</small>
              </div>  
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>Engineering Thinking</h4>
                <small className='text-light'>Physics background applied to rigorous reasoning and real systems</small>
              </div>  
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className= 'experience__details-icon'/>
              <div>
                <h4>Product-Oriented Execution</h4>
                <small className='text-light'>Turning technical ideas into practical and useful solutions</small>
              </div>  
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
