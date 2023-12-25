import React from 'react'
import {motion} from 'framer-motion'


const Skill_component = ({Techs:frontendTechs, variants, techStack}) => {
  return (
    <div className="col-span-4 md:col-span-1 px-10 border-2 border-red-400">
    <h1 className='text-4xl flex justify-center py-4'>{techStack}</h1>
      {frontendTechs.map((tech)=>(
        <div className="grid grid-cols-2">
          {tech.id % 2 == 0 
            ? 
              <motion.div variants={variants} initial="initialLeft" whileInView="animateLeft" className='col-span-1flex flex-col items-center'>
                <img src={tech.img} alt="" width={70}/>
                {tech.name}
              </motion.div> 
            : 
              <motion.div variants={variants} initial="initialRight" whileInView="animateRight" drag className='col-span-2 flex flex-col items-center justify-center'>
                 <img src={tech.img} alt="" width={70}/>
                {tech.name}
              </motion.div>             
          }
        </div>
      ))}
  </div>
  )
}

export default Skill_component