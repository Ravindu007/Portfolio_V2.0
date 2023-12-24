import React from 'react'
import "./Home.scss"
import Hero from '../Components/Hero'
import Parralax from '../Components/Parralax'

const Home = () => {
  return (
    <div>
      <div className="section">
        <Hero/>
      </div>
      <div className="section">
        <Parralax/>
      </div>
      
    </div>
  )
}

export default Home