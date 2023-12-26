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

const badgeVariants = {
  initial:{
    scale:0.8
  },
  animate:{
    scale:1,
    transition:{
      repeat:"Infinity",
      duration:0.8,
      staggerChildren:5.0
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
          <div className="badges flex gap-2" variants={badgeVariants}>
            <motion.div initial="initial" animate="animate" variants={badgeVariants} className="badge rounded-md bg-pink-300 text-black px-2 py-1">Full-stack</motion.div>
            <motion.div initial="initial" animate="animate" variants={badgeVariants} className="badge rounded-md bg-blue-300 text-black px-2 py-1">Frontend</motion.div>
            <motion.div initial="initial" animate="animate" variants={badgeVariants} className="badge rounded-md bg-green-300 text-black px-2 py-1">Backend</motion.div>
            <motion.div initial="initial" animate="animate" variants={badgeVariants} className="badge rounded-md bg-yellow-300 text-black px-2 py-1">Web Development</motion.div>
          </div>
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