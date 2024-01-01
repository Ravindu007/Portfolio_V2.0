import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';


const Projects = () => {
  const [projects, setProjects] = useState([

    { id: 1, name: 'TaskCraft', desc: 'A collobarative task management application which allows team members to work on different tasks colloboratively', img: './projects/taskcraft.png', techsUsed:[
      {id:1, techName:"ASP.NET", logo:"./programming/csharp.svg"},
      {id:2, techName:"Angular", logo:"./programming/angular.svg"},
      {id:3, techName:"MySQL", logo:"./programming/mysql.svg"},
      {id:3, techName:"Auth0", logo:"./programming/auth0.svg"},
      {id:4, techName:"Git", logo:"./programming/git.svg"},
    ], github: 'https://github.com/Ravindu007/TaskCraft' },

    { id: 2, name: 'Easy Proof', desc: 'A web application that ensures the authenticity of a product by saving product details in a blockchain and allowing QR scan functionality to check authenticity', img: './projects/easy.png', techsUsed:[
      {id:1, techName:"ASP.NET", logo:"./programming/csharp.svg"},
      {id:2, techName:"Angular", logo:"./programming/angular.svg"},
      {id:3, techName:"MySQL", logo:"./programming/mysql.svg"},
      {id:4, techName:"Git", logo:"./programming/git.svg"},
    ], github: 'https://github.com/Ravindu007/EasyProof-Frontend' },


    { id: 3, name: 'Employee Management System', desc: 'A platform that allows a human resource department to manage their employees in the company', img: './projects/employee.png', techsUsed:[
      {id:1, techName:"ASP.NET", logo:"./programming/csharp.svg"},
      {id:2, techName:"Angular", logo:"./programming/angular.svg"},
      {id:3, techName:"MySQL", logo:"./programming/mysql.svg"},
      {id:4, techName:"Git", logo:"./programming/git.svg"},
    ], github: 'https://github.com/Ravindu007/Employee-Management-CRUD' },


    { id: 4, name: 'Learning Management System', desc: 'A platform that allows managing academic tasks for students and teachers controlled with a secure admin panel.', img: './projects/lms.png', techsUsed:[
      {id:1, techName:"React", logo:"./programming/react.svg"},
      {id:2, techName:"Node.js", logo:"./programming/node.svg"},
      {id:3, techName:"Express.js", logo:"./programming/express.svg"},
      {id:4, techName:"MongoDB", logo:"./programming/mongodb.svg"},
      {id:5, techName:"Git", logo:"./programming/git.svg"},
    ], github: 'https://github.com/Ravindu007/MERN-LMS' },

    { id: 5, name: 'Reservation Web Application', desc: 'A hotel reservation web application that allows users to manage reservations', img: './projects/hotel.png', techsUsed:[
      {id:1, techName:"React", logo:"./programming/react.svg"},
      {id:2, techName:"Node.js", logo:"./programming/node.svg"},
      {id:3, techName:"Express.js", logo:"./programming/express.svg"},
      {id:4, techName:"MongoDB", logo:"./programming/mongodb.svg"},
      {id:5, techName:"Git", logo:"./programming/git.svg"},
    ], github: 'https://github.com/Ravindu007/MERN-Booking.com-clone' },


    { id: 6, name: 'GPA Calculator', desc: 'A web application that allow undergraduates to add their academic marks and view their current GPA', img: './projects/gpa.png', techsUsed:[
      {id:1, techName:"React", logo:"./programming/react.svg"},
      {id:2, techName:"Node.js", logo:"./programming/node.svg"},
      {id:3, techName:"Express.js", logo:"./programming/express.svg"},
      {id:4, techName:"MongoDB", logo:"./programming/mongodb.svg"},
      {id:5, techName:"Git", logo:"./programming/git.svg"},
    ], github: 'https://github.com/Ravindu007/GPA---Calculator' },

    
    { id: 7, name: 'TraveLog', desc: 'A web plat form which connects travellers around the world', img: './projects/travel.png', techsUsed:[
      {id:1, techName:"React", logo:"./programming/react.svg"},
      {id:2, techName:"Node.js", logo:"./programming/node.svg"},
      {id:3, techName:"Express.js", logo:"./programming/express.svg"},
      {id:4, techName:"MongoDB", logo:"./programming/mongodb.svg"},
      {id:5, techName:"Git", logo:"./programming/git.svg"},
    ], github: 'https://github.com/Ravindu007/travelog-frontend' },

    { id: 8, name: 'Weather Application', desc: 'A Personalized weather application which shows weather according to user input', img: './projects/weather.png', techsUsed:[
      {id:1, techName:"React", logo:"./programming/react.svg"},
      {id:2, techName:"Node.js", logo:"./programming/node.svg"},
      {id:3, techName:"Express.js", logo:"./programming/express.svg"},
      {id:4, techName:"MongoDB", logo:"./programming/mongodb.svg"},
      {id:5, techName:"Git", logo:"./programming/git.svg"},
    ], github: 'https://github.com/Ravindu007/WeatherApp_Loonslap_PreSelection' },

    
  ]);

  const variants = {
    initial: {
      opacity: 0,
      y: 0,
    },
    animate: {
      opacity: 1,
      y: 10,
      transition: {
        duration:0.3,
        staggerChildren:0.1
      },
    },
  };

  return (
    <div className="projects">
      <div className="row flex justify-center text-4xl font-bold tracking-widest underline underline-offset-8">
        <h1>Projects</h1>
      </div>
      <motion.div className="grid grid-cols-3 mx-0 mt-16 md:mt-0 pt-2 mb-5 w-full"  variants={variants} initial="initial" whileInView="animate">
        {projects.map((project) => (
          // column
          <div key={project.id} className="col-span-3 md:col-span-1 flex justify-center">
            {/* card */}
            <ProjectCard project={project} variants={variants}/>
          </div>
        ))}

        </motion.div>
    </div>
  );
};

export default Projects;
