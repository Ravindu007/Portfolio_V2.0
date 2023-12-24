import React from 'react'
import Navbar from '../navbar/Nabar'
import {motion} from "framer-motion"
import TextAnimation from './textAnimation/TextAnimation'

const imageVariants = {
  initial:{
    x:100
  },
  visible:{
    x:0,
    transition:{duration:0.3}
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
    <div>
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
          <motion.div variants={textVariants} className="career text-6xl font-bold">
            <TextAnimation/>
          </motion.div>
          <motion.div variants={textVariants} className="desc">
            <p>Passionate, adaptable learner with expertise in Object-Oriented Programming, Data Structures, and Algorithms. Dedicated to agile project collaboration and committed to delivering quality results. Actively seeks growth opportunities.</p>
          </motion.div>
          <motion.div variants={textVariants} className="button-section flex gap-2">
            <motion.button variants={textVariants} className='styleBtn'>Contact</motion.button>
            <motion.button variants={textVariants} className=''>
              <img src="./icons/scroll.svg" alt=""  width={50}/>
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* image section + logos */}
        <div className="img-section  md:col-span-1  mt-10 md:mt-0 relative ">

          {/* LOGOS */}
          {/* <div className="logo-section hidden md:block opacity-[0.6]">
            <img src="./programming/js.svg" alt="" width={75} className=' absolute top-[40%] left-[28%]'/>
            <img src="./programming/react.svg" alt="" width={75} className=' absolute top-[20%] left-[18%]'/>
            <img src="./programming/angular.svg" alt="" width={75} className=' absolute top-[10%] left-[41%]'/>
            <img src="./programming/node.svg" alt="" width={75} className=' absolute top-[51%] left-[75%]'/>
            <img src="./programming/html.svg" alt="" width={75} className=' absolute top-[67%] left-[84%]'/>
            <img src="./programming/python.svg" alt="" width={75} className=' absolute top-[17%] left-[84%]'/>
            <img src="./programming/css.svg" alt="" width={75} className=' absolute top-[40%] left-[88%]'/>
            <img src="./programming/java.svg" alt="" width={75} className=' absolute top-[87%] left-[84%]'/>
            <img src="./programming/mysql.svg" alt="" width={75} className=' absolute top-[77%] left-[14%]'/>
            <img src="./programming/git.svg" alt="" width={75} className=' absolute top-[55%] left-[14%]'/>
          </div> */}

          {/* image */}
          <motion.div 
            className="img-container relative hidden md:block md:absolute md:bottom-1 md:right-0 py-6"
            variants={imageVariants}
            initial="initial"
            whileInView="visible"
          >
            <img src="./hero/hero.png" alt="" />
          </motion.div>
        </div>


      </div>
    </div>
  )
}

export default Hero