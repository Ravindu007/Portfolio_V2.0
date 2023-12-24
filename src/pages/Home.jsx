import React from 'react'
import "./Home.scss"
import Hero from '../Components/Hero/Hero'
import Parralax from '../Components/Parallax/Parralax'


const Home = () => {
  return (
    <div className='px-20'>
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