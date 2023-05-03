import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav]= useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "about" : ""}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "experience" : ""}><BiBook/></a>
      <a href="#services" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "services" : ""}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "contact" : ""}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav