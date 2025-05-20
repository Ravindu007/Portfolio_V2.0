import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';


const Projects = () => {
  const [projects, setProjects] = useState([

    { id: 1, name: 'TaskCraft', desc: 'A collobarative task management application which allows team members to work on different tasks colloboratively', img: './projects/taskcraft.png', techsUsed:[
      {id:1.1, techName:"ASP.NET", logo:"./programming/csharp.svg"},
      {id:1.2, techName:"Angular", logo:"./programming/angular.svg"},
      {id:1.3, techName:"MySQL", logo:"./programming/mysql.svg"},
      {id:1.4, techName:"Auth0", logo:"./programming/auth0.svg"},
      {id:1.5, techName:"Git", logo:"./programming/git.svg"},
    ], github: 'https://github.com/Ravindu007/TaskCraft' },

    { id: 2, name: 'SkillSync -(onGoing Project)', desc: 'A platform which allow employers to hire employees and Employees to apply for jobs', img: './projects/skillsync.png', techsUsed:[
      {id:2.1, techName:"React", logo:"./programming/react.svg"},
      {id:2.2, techName:"Node.js", logo:"./programming/node.svg"},
      {id:2.3, techName:"Express.js", logo:"./programming/express.svg"},
      {id:2.4, techName:"MongoDB", logo:"./programming/mongodb.svg"},
      {id:2.5, techName:"Git", logo:"./programming/git.svg"},
    ], github: 'https://github.com/Ravindu007/SkillSync' },
    
    { id: 3, name: 'Easy Proof', desc: 'A web application that ensures the authenticity of a product by saving product details in a blockchain and allowing QR scan functionality to check authenticity', img: './projects/easy.png', techsUsed:[
      {id:3.1, techName:"React", logo:"./programming/react.svg"},
      {id:3.2, techName:"Node.js", logo:"./programming/node.svg"},
      {id:3.3, techName:"Express.js", logo:"./programming/express.svg"},
      {id:3.4, techName:"MongoDB", logo:"./programming/mongodb.svg"},
      {id:3.5, techName:"Git", logo:"./programming/git.svg"},
    ], github: 'https://github.com/Ravindu007/EasyProof-Frontend' },


    { id: 4, name: 'Employee Management System', desc: 'A platform that allows a human resource department to manage their employees in the company', img: './projects/employee.png', techsUsed:[
      {id:4.1, techName:"ASP.NET", logo:"./programming/csharp.svg"},
      {id:4.2, techName:"Angular", logo:"./programming/angular.svg"},
      {id:4.3, techName:"MySQL", logo:"./programming/mysql.svg"},
      {id:4.4, techName:"Git", logo:"./programming/git.svg"},
    ], github: 'https://github.com/Ravindu007/Employee-Management-CRUD' },


    { id: 5, name: 'Learning Management System', desc: 'A platform that allows managing academic tasks for students and teachers controlled with a secure admin panel.', img: './projects/lms.png', techsUsed:[
      {id:5.1, techName:"React", logo:"./programming/react.svg"},
      {id:5.2, techName:"Node.js", logo:"./programming/node.svg"},
      {id:5.3, techName:"Express.js", logo:"./programming/express.svg"},
      {id:5.4, techName:"MongoDB", logo:"./programming/mongodb.svg"},
      {id:5.5, techName:"Git", logo:"./programming/git.svg"},
    ], github: 'https://github.com/Ravindu007/MERN-LMS' },

    { id: 6, name: 'Reservation Web Application', desc: 'A hotel reservation web application that allows users to manage reservations', img: './projects/hotel.png', techsUsed:[
      {id:6.1, techName:"React", logo:"./programming/react.svg"},
      {id:6.2, techName:"Node.js", logo:"./programming/node.svg"},
      {id:6.3, techName:"Express.js", logo:"./programming/express.svg"},
      {id:6.4, techName:"MongoDB", logo:"./programming/mongodb.svg"},
      {id:6.5, techName:"Git", logo:"./programming/git.svg"},
    ], github: 'https://github.com/Ravindu007/MERN-Booking.com-clone' },


    { id: 7, name: 'GPA Calculator', desc: 'A web application that allow undergraduates to add their academic marks and view their current GPA', img: './projects/gpa.png', techsUsed:[
      {id:7.1, techName:"React", logo:"./programming/react.svg"},
      {id:7.2, techName:"Node.js", logo:"./programming/node.svg"},
      {id:7.3, techName:"Express.js", logo:"./programming/express.svg"},
      {id:7.4, techName:"MongoDB", logo:"./programming/mongodb.svg"},
      {id:7.5, techName:"Git", logo:"./programming/git.svg"},
    ], github: 'https://github.com/Ravindu007/GPA---Calculator' },

    
    { id: 8, name: 'TraveLog', desc: 'A web plat form which connects travellers around the world', img: './projects/travel.png', techsUsed:[
      {id:8.1, techName:"React", logo:"./programming/react.svg"},
      {id:8.2, techName:"Node.js", logo:"./programming/node.svg"},
      {id:8.3, techName:"Express.js", logo:"./programming/express.svg"},
      {id:8.4, techName:"MongoDB", logo:"./programming/mongodb.svg"},
      {id:8.5, techName:"Git", logo:"./programming/git.svg"},
    ], github: 'https://github.com/Ravindu007/travelog-frontend' },

    { id: 9, name: 'Weather Application', desc: 'A Personalized weather application which shows weather according to user input', img: './projects/weather.png', techsUsed:[
      {id:9.1, techName:"React", logo:"./programming/react.svg"},
      {id:9.2, techName:"Node.js", logo:"./programming/node.svg"},
      {id:9.3, techName:"Express.js", logo:"./programming/express.svg"},
      {id:9.4, techName:"MongoDB", logo:"./programming/mongodb.svg"},
      {id:9.5, techName:"Git", logo:"./programming/git.svg"},
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
