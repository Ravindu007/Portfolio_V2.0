import React, { useState } from 'react'
import {motion} from 'framer-motion'

const Certiificates = () => {

  const [certificates, setCertificates] = useState([
    {id:1, img:"./certifications/c1.png"},
    {id:2, img:"./certifications/c2.png"},
    {id:3, img:"./certifications/c3.png"},
    {id:4, img:"./certifications/c1.png"},
    {id:5, img:"./certifications/c2.png"},
  ])

  const cardVariants = {
    initial:{
      scale:0.2,
      y:-100
    },
    animate:{
      scale:1.2,
      y:0,
      transition:{
        type:"spring",
        stiffness:600,
        damping:30,
        staggerChildren:0.8
      }
    },
    tap:{
      scale:2.0,
    }
  }

  return (
    <div className='flex flex-col py-10'>
      <div className="row flex justify-center text-4xl font-bold tracking-widest underline underline-offset-8 mb-0">
          <h1>Certifications</h1>
      </div>
        <div className='mt-0 grid grid-cols-3 py-5 px-20'>

        {certificates.map((certificate) => (
          <div className="col-span-3 md:col-span-1">
            <motion.div variants={cardVariants} className="flex justify-center items-center p-2">
              <motion.img src={certificate.img} alt="" variants={cardVariants} initial="initial" whileInView="animate"  whileHover="tap" className='w-full md:w-[60%] mx-5 my-5'/>
              </motion.div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className='styleBtn'>VIEW MORE</button>
      </div>
    </div>
  )
}

export default Certiificates