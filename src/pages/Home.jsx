import React from 'react'
import "./Home.scss"
import Hero from '../Components/Hero/Hero'
import Skills from '../Components/Skills/Skills'


const Home = () => {
  return (
    <div className='px-20'>
      <div className="section">
        <Hero/>
      </div>
      <div className="section">
        <Skills/>
      </div>
    </div>
  )
}

export default Home