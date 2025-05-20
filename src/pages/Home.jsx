import React from 'react'
import "./Home.scss"
import Hero from '../Components/Hero/Hero'
import Skills from '../Components/Skills/Skills'
import Projects from '../Components/Projects/Projects'
import Education from '../Components/Education/Education'
import Certiificates from '../Components/Certificats/Certiificates'
import Services from '../Components/Services/Services'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import WorkExperience from '../Components/WorkExperience/WorkExperience'
import Achievements from '../Components/Achievements/Achievements'


const Home = () => {
  return (
    <div className='px-5'>
      <div className="section" id='hero'>
        <Hero/>
      </div>
      <div className='section' id='work'>
        <WorkExperience/>
      </div>
      <div className="section" id='skills'>
        <Skills/>
      </div>
      <div className="section" id='projects'>
        <Projects/>
      </div>
      <div className='section' id='achievements'>
        <Achievements/>
      </div>
      <div className="section" id='education'>
        <Education/>
      </div>
      <div className="section" id='certificates'>
        <Certiificates/>
      </div>
      <div className="section" id='services'>
        <Services/>
      </div>
      <div className="section" id='contact'>
        <Contact/>
      </div>
      <div className="section" id=''>
        <Footer/>
      </div>
    </div>
  )
}

export default Home