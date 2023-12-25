import React from 'react'
import "./Home.scss"
import Hero from '../Components/Hero/Hero'
import Skills from '../Components/Skills/Skills'
import Projects from '../Components/Projects/Projects'
import Education from '../Components/Education/Education'
import Certiificates from '../Components/Certificats/Certiificates'


const Home = () => {
  return (
    <div className='px-5'>
      <div className="section">
        <Hero/>
      </div>
      <div className="section">
        <Skills/>
      </div>
      <div className="section">
        <Projects/>
      </div>
      <div className="section">
        <Education/>
      </div>
      <div className="section">
        <Certiificates/>
      </div>
    </div>
  )
}

export default Home