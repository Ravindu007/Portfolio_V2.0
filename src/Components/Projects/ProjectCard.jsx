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

  return (
      <>
        
        {showModal && (
          <motion.div className="modal absolute bg-white w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-50 text-black rounded-md px-5 py-5" 
          ref={modalRef}
          tabIndex={-1}
          variants={ModalVariants}
          initial="initial"
          animate="animate"
          >
            <h1>{project.name}</h1>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <img src={project.img} alt="" />
              </div>
              <div className="col-span-1 px-5">
                <p>{project.desc}</p>
              </div>
            </div>
            <button className='styleBtn' onClick={()=>{setShowModal(false)}}>Close</button>
          </motion.div>
        )}



      <div className='px-5 py-4 w-4/5'>
        <motion.Card variants={variants} className="bg-inherit rounded-lg shadow-md shadow-primary flex flex-col items-center justify-center md:gap-1 py-4 my-4 hover:bg-gradient-to-b from-primary  hover:text-black ease-in duration-200">
          <Card.Header>{project.name}</Card.Header>
          <Card.Body>
            <Card.Img src={project.img} className="md:min-h-28 md:max-h-28 md:min-w-52 md:max-w-52" />
            </Card.Body>
          <Card.Footer className="flex gap-3 items-center">
            <img src="./icons/link.png" alt="" width={15} />
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