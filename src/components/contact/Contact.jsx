import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='.contact__option-icon'/>
            <h4>Email</h4>
            <h5>juandavidroarci17@gmail.com</h5>
            <a href='mailto:juandavidroarci17@gmail.com' target='_blank'>Send message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='.contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Juan David Rodriguez</h5>
            <a href='https://www.facebook.com/juandavid.rodriguezarciniegas.3/' target='_blank'>Send message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='.contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+57 3105541547</h5>
            <a href='https://api.whatsapp.com/send?phone=573105541547' target='_blank'>Send message</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact