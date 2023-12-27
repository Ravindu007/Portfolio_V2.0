import React, { useEffect, useRef, useState } from 'react'
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';


const ProjectCard = ({project, variants}) => {

  const [showModal, setShowModal] = useState(false)
  const modalRef = useRef(null);

  useEffect(() => {
    // Focus the modal when it is shown
    if (showModal && modalRef.current) {
      modalRef.current.focus();
    }
  }, [showModal]);


  const ModalVariants = {
    initial: {
      opacity: 0.2,
      clipPath: "circle(30px at 50px 50px)",
    },
    animate: {
      opacity: 1,
      clipPath: "circle(100% at 50% 50%)",
      transition: {
        type:"spring",
        stiffness:1000,
        damping:250
      }
    }
  }

  const techLogoVariants = {
    initial:{
      opacity:0,
      y:-10
    },
    animate:{
      opacity:1,
      y:0,
      transition:{
        type:"spring",
        stiffness:200,
        staggerChildren:0.3
      }
    }
  }

  return (
      <>
        {/* model */}
        {showModal && (
          <motion.div className="modal absolute bg-white w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-50 text-black rounded-md px-5 py-5" 
          ref={modalRef}
          tabIndex={-1}
          variants={ModalVariants}
          initial="initial"
          animate="animate"
          >
            <h1 className=''>{project.name}</h1>
            <div className="grid grid-cols-2">
              <div className="col-span-2 md:col-span-1">
                <img src={project.img} alt="" />
              </div>
              <div className="col-span-2 md:col-span-1 px-5">
                <p>{project.desc}</p>
                <motion.div className="tech-stack flex gap-4 mt-5" 
                  variants={techLogoVariants}
                  initial="initial"
                  animate="animate"
                >
                <div className="wrapper flex">
                {project.techsUsed.map((tech)=>(
                  <motion.div className="tech flex flex-col items-center px-1 md:px-5" key={tech.id} variants={techLogoVariants}>
                    <p className='font-semibold'>{tech.techName}</p>
                    <img src={tech.logo} alt="" width={40}/>
                  </motion.div>
                ))}
                </div>
                </motion.div>
              </div>
            </div>
            <button className='styleBtn' onClick={()=>{setShowModal(false)}}>Close</button>
          </motion.div>
        )}


      {/* card */}
      <div className='px-5 py-4 w-4/5'>
        <motion.Card variants={variants} className="bg-inherit rounded-lg shadow-md shadow-primary flex flex-col items-center justify-center md:gap-1 py-4 my-4 hover:bg-gradient-to-b from-primary  hover:text-black ease-in duration-200">
          <Card.Header className='text-xl font-semibold text-center'>{project.name}</Card.Header>
          <Card.Body>
            <Card.Img src={project.img} className="md:min-h-28 md:max-h-28 md:min-w-52 md:max-w-52" />
            </Card.Body>
          <Card.Footer className="flex gap-3 items-center">
            <a href={project.github}><img src="./icons/link.png" alt="" width={15} /></a>
            <button className="styleBtn" onClick={() => setShowModal(true)}>
                VIEW
              </button>
          </Card.Footer>
          </motion.Card> 

      </div>
      </>
  )
}

export default ProjectCard