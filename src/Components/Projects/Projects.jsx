import React, { useState } from 'react';
import ProjectCard from './ProjectCard';


const Projects = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Project 1', desc: 'How I have built this', img: './projects/pr2.png', github: '' },
    { id: 2, name: 'Project 2', desc: 'How I have built this', img: './projects/pr2.png', github: '' },
    { id: 3, name: 'Project 3', desc: 'How I have built this', img: './projects/pr3.png', github: '' },
    { id: 4, name: 'Project 3', desc: 'How I have built this', img: './projects/pr3.png', github: '' },
    { id: 5, name: 'Project 3', desc: 'How I have built this', img: './projects/pr3.png', github: '' },
    { id: 6, name: 'Project 3', desc: 'How I have built this', img: './projects/pr3.png', github: '' },
  ]);

  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: -60,
      transition: {
        duration:0.1
      },
    },
  };


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <div className="grid grid-cols-3 mx-0 mt-16 md:mt-20 py-20">
        {projects.map((project) => (
          // column
          <div key={project.id} className="col-span-3 md:col-span-1 flex justify-center">
            {/* card */}
            <ProjectCard project={project} variants={variants}/>
          </div>
        ))}

      </div>
  );
};

export default Projects;
