import React from "react";
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Experience from "./components/experience/Experience"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Portfolio from "./components/portfolio/Portfolio"
import Services from "./components/services/Services"
import Testimonials from "./components/testimonials/Testimonials"
import Vision from "./components/vision/Vision"
import Projects from "./components/projects/Projects"
import {ReactComponent as SydneySkyline} from "./assets/sydney-skyline.svg"
const App = () => {
  return (
    <>
    <div className="skyline-bg" aria-hidden="true">
      <SydneySkyline/>
    </div>
    <Header/>
    <Nav/>
    <About/>
    <Vision/>
    <Projects/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/> 
    
    
    
    </>
  )
}

export default App;
