import React from 'react'
import "./Home.scss"
import Hero from '../Components/Hero/Hero'
import Skills from '../Components/Skills/Skills'
import Projects from '../Components/Projects/Projects'


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
    </div>
  )
}

export default Home