import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Projects = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Project 1', desc: 'How I have built this', img: './projects/pr2.png', github: '' },
    { id: 2, name: 'Project 2', desc: 'How I have built this', img: './projects/pr2.png', github: '' },
    { id: 3, name: 'Project 3', desc: 'How I have built this', img: './projects/pr3.png', github: '' },
    { id: 3, name: 'Project 3', desc: 'How I have built this', img: './projects/pr3.png', github: '' },
    { id: 3, name: 'Project 3', desc: 'How I have built this', img: './projects/pr3.png', github: '' },
    { id: 3, name: 'Project 3', desc: 'How I have built this', img: './projects/pr3.png', github: '' },
  ]);

  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: -10,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <>
      <div className="grid grid-cols-3 mx-0">
        {projects.map((project) => (
          // column
          <div key={project.id} className="col-span-3 md:col-span-1 flex justify-center">
            {/* card */}
            <motion.Card variants={variants} initial="initial" whileInView="animate" className="bg-inherit rounded-lg shadow-md shadow-primary w-2/3 flex flex-col items-center justify-center md:gap-4 py-4 my-4 hover:bg-gradient-to-b from-primary  hover:text-black ease-in duration-200">
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
        ))}
      </div>
    </>
  );
};

export default Projects;
