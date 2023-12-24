import React from 'react'
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';


const ProjectCard = ({project, variants}) => {
  return (
    <div className='w-4/5 px-5 py-4'>
      <motion.Card variants={variants} initial="initial" whileInView="animate" className="bg-inherit rounded-lg shadow-md shadow-primary w-full flex flex-col items-center justify-center md:gap-1 py-4 my-4 hover:bg-gradient-to-b from-primary  hover:text-black ease-in duration-200">
        <Card.Header>{project.name}</Card.Header>
        <Card.Body>
          <Card.Img src={project.img} className="md:min-h-28 md:max-h-28 md:min-w-52 md:max-w-52" />
          </Card.Body>
        <Card.Footer className="flex gap-3 items-center">
          {project.desc}
          <img src="./icons/link.png" alt="" width={30} />
        </Card.Footer>
          <Card.Footer>
            <button className="styleBtn">
              Click
            </button>
          </Card.Footer>
        </motion.Card>       
    </div>
  )
}

export default ProjectCard