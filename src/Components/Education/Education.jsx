import React, { useState } from 'react'
import {motion} from 'framer-motion'


const cardVariants = {
  logoInitial:{
    scale:1,
  },
  logoAnimation:{
    scale:0.8,
    transition:{
      type:"spring",
      stiffness:100,
      damping:10
    }
  },
  leftinitialCard:{
    opacity: 0,
    clipPath: "circle(0% at 50px 50px)",
  },
  leftanimateCard:{
    opacity: 1,
    clipPath: "circle(100% at 50% 50%)",
    transition: {
      duration: 0.75,
    }
  },
  textInitial:{
    x:-100
  },
  textAnimate:{
    x:0,
    transition:{
      type:"spring",
      stiffness:600,
      damping:15
    }
  }
}

const Education = () => {

  const [education, setEducation] = useState([
    {id:1,logo:"./logos/ananda.png", name:"Ananda College", desc:"G.C.E. (A/Ls) & G.C.E. (O/Ls)"},
    {id:2,logo:"./logos/susl.png", name:"Sabaragamuwa University", desc:"CGPA: 3.9523"},
  ])
  return (
    <div className='mt-20 mb-12'>
      <div className="row flex justify-center text-4xl font-bold tracking-widest underline underline-offset-8 mb-10">
          <h1>Education</h1>
      </div>
      <div className="grid grid-cols-2 gap-4">
        
        {education.map((institute)=>(
        <div className="col-span-2 md:col-span-1 flex justify-center">

            {/* Edication card */}
            <motion.div className="card box-border bg-white text-black shadow-sm shadow-gray-400 w-4/5 h-auto rounded-md flex justify-center" variants={cardVariants} initial="leftinitialCard" whileInView="leftanimateCard">

              {/* text */}
              <div className="grid grid-cols-3 px-2">
                <motion.div className="col-span-2 flex flex-col justify-center items-center text-xl font-semibold" variants={cardVariants}>
                  <motion.h1 className='text-left' variants={cardVariants} initial="textInitial" whileInView="textAnimate">{institute.name}</motion.h1>
                  <motion.p className='text-center text-sm' variants={cardVariants} initial="textInitial" whileInView="textAnimate">{institute.desc}</motion.p>
                </motion.div>
                <motion.div className="col-span-1 flex items-center" variants={cardVariants} initial="logoInitial" whileInView="logoAnimation">
                  <img src={institute.logo} className='border-full'/>
                </motion.div>
              </div>
            
            </motion.div>  

         </div>
        ))}

      </div>
    </div>
  )
}

export default Education