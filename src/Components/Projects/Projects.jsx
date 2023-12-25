import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';


const Projects = () => {
  const [projects, setProjects] = useState([

    { id: 1, name: 'Easy Proof', desc: 'A web application that ensures the authenticity of a product by saving product details in a blockchain and allowing QR scan functionality to check authenticity', img: './projects/pr2.png', techsUsed:[
      {id:1, techName:"ASP.NET", logo:"./programming/csharp.svg"},
      {id:2, techName:"Angular", logo:"./programming/angular.svg"},
      {id:3, techName:"MySQL", logo:"./programming/mysql.svg"},
      {id:4, techName:"Git", logo:"./programming/git.svg"},
    ], github: '' },


    { id: 2, name: 'Employee Management System', desc: 'A platform that allows a human resource department to manage their employees in the company', img: './projects/pr2.png', techsUsed:[
      {id:1, techName:"ASP.NET", logo:"./programming/csharp.svg"},
      {id:2, techName:"Angular", logo:"./programming/angular.svg"},
      {id:3, techName:"MySQL", logo:"./programming/mysql.svg"},
      {id:4, techName:"Git", logo:"./programming/git.svg"},
    ], github: '' },


    { id: 3, name: 'Learning Management System', desc: 'A platform that allows managing academic tasks for students and teachers controlled with a secure admin panel.', img: './projects/pr2.png', techsUsed:[
      {id:1, techName:"React", logo:"./programming/react.svg"},
      {id:2, techName:"Node.js", logo:"./programming/node.svg"},
      {id:3, techName:"Express.js", logo:"./programming/express.svg"},
      {id:4, techName:"MongoDB", logo:"./programming/mongodb.svg"},
      {id:5, techName:"Git", logo:"./programming/git.svg"},
    ], github: '' },

    { id: 4, name: 'Reservation Web Application', desc: 'A hotel reservation web application that allows users to manage reservations', img: './projects/pr2.png', techsUsed:[
      {id:1, techName:"React", logo:"./programming/react.svg"},
      {id:2, techName:"Node.js", logo:"./programming/node.svg"},
      {id:3, techName:"Express.js", logo:"./programming/express.svg"},
      {id:4, techName:"MongoDB", logo:"./programming/mongodb.svg"},
      {id:5, techName:"Git", logo:"./programming/git.svg"},
    ], github: '' },


    { id: 5, name: 'GPA Calculator', desc: 'A web application that allow undergraduates to add their academic marks and view their current GPA', img: './projects/pr2.png', techsUsed:[
      {id:1, techName:"React", logo:"./programming/react.svg"},
      {id:2, techName:"Node.js", logo:"./programming/node.svg"},
      {id:3, techName:"Express.js", logo:"./programming/express.svg"},
      {id:4, techName:"MongoDB", logo:"./programming/mongodb.svg"},
      {id:5, techName:"Git", logo:"./programming/git.svg"},
    ], github: '' },

    

    
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
        duration:0.3,
        staggerChildren:0.1
      },
    },
  };

  return (
      <motion.div className="grid grid-cols-3 mx-0 mt-16 md:mt-20 pt-20 pb-0 w-full"  variants={variants} initial="initial" whileInView="animate">

        {projects.map((project) => (
          // column
          <div key={project.id} className="col-span-3 md:col-span-1 flex justify-center">
            {/* card */}
            <ProjectCard project={project} variants={variants}/>
          </div>
        ))}

      </motion.div>
  );
};

export default Projects;
