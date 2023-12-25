import React from 'react'
import Navbar from '../navbar/Nabar'
import {motion} from "framer-motion"
import TextAnimation from './textAnimation/TextAnimation'
import './Hero.scss'

const imageVariants = {
  initial:{
    x:100,
    scale:0.8
  },
  visible:{
    x:0,
    scale:1.5,
    transition:{duration:0.3}
  }
}

const blobVariants = {
  initial:{
    opacity:0
  },
  animate:{
    opacity:1,
    transition:{
      duration:0.8,
      repeat: Infinity
    }
  }
}


const textVariants= {
  initial:{
    y:"-2000%",
    opacity:0
  },
  visible:{
    y:10,
    opacity:1,
    trainsition:{
      duration:5,
      staggerChildren:0.5
    }
  }
}

const Hero = () => {
  return (
    <div className="hero">
      <Navbar/>

      <div className="grid md:grid-cols-3 h-[93vh]">

        {/* text section */}
        <motion.div 
          className="text-secion md:col-span-2 flex flex-col justify-center gap-4 -z-40"
          variants={textVariants}
          initial="initial" 
          animate="visible"  
        > 
          {/* NAME   */}
          <motion.div variants={textVariants} className="greetings text-4xl">
            Hi! I am Ravindu Dharmadasa
          </motion.div>
          <motion.div variants={textVariants} className="career text-6xl min-h-32 font-bold">
            <TextAnimation/>
          </motion.div>
          {/* <motion.div variants={textVariants} className="desc">
            <p>Passionate, adaptable learner with expertise in Object-Oriented Programming, Data Structures, and Algorithms. Dedicated to agile project collaboration and committed to delivering quality results. Actively seeks growth opportunities.</p>
          </motion.div> */}
          <motion.div variants={textVariants} className="button-section flex gap-2">
            <motion.button variants={textVariants} className='styleBtn'>Contact</motion.button>
            <motion.button variants={textVariants} className=''>
              <img src="./icons/scroll.svg" alt=""/>
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* image section + logos */}
        <div className="img-section md:col-span-1  mt-10 md:mt-0 md:mb-20 relative mr-1">
          {/* image */}
          <motion.div 
            className="img-container flex justify-center relative md:block md:absolute md:bottom-1 md:right-0 py-6"
            variants={imageVariants}
            initial="initial"
            whileInView="visible"
          > 
            <div className="bg-img w-2/3 md:mt-16 md:w-full flex justify-center">
              <img src="./hero/hero3.png" alt="" />
           </div>
          </motion.div>
        </div>
      </div>

    </div>
  )
}

export default Hero