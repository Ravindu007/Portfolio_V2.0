import React, { useState } from 'react'
import Skill_component from './Skill_component'

const Skills = () => {
  const [frontendTechs, setFrontendTechs] = useState([
    {id:1, name:"Ract", img:"./programming/react.svg"},
    {id:2, name:"Angular", img:"./programming/angular.svg"},
    {id:3, name:"HTML", img:"./programming/html.svg"},
    {id:4, name:"CSS", img:"./programming/css.svg"},
    {id:5, name:"Bootstrap", img:"./programming/bootstrap.svg"},
    {id:6, name:"SASS", img:"./programming/sass.svg"}
  ])

  const [backendTechs, setBackendTechs] = useState([
    {id:1, name:"Node.js", img:"./programming/node.svg"},
    {id:2, name:"Express.js", img:"./programming/express.svg"},
    {id:3, name:"PHP", img:"./programming/php.svg"},
  ])

  const [programingLanguages, setProgramingLanguages] = useState([
    {id:1, name:"Java", img:"./programming/java.svg"},
    {id:2, name:"JavaScript", img:"./programming/js.svg"},
    {id:3, name:"Python", img:"./programming/python.svg"},
    {id:4, name:"C#", img:"./programming/csharp.svg"},
    {id:5, name:"TypeScript", img:"./programming/typescript.svg"},
  ])

  const [tools, setTools] = useState([
    {id:1, name:"Git", img:"./programming/git.svg"},
    {id:2, name:"MySQL", img:"./programming/mysql.svg"},
    {id:3, name:"MySQL", img:"./programming/mongodb.svg"},
    {id:4, name:"AWS", img:"./programming/amazonwebservices.svg"},
    {id:5, name:"VS", img:"./programming/visualstudio.svg"},
  ])

  const variants = {
    initialLeft:{
      x:"-200%",
      opacity:0
    },
    animateLeft:{
      x:0,
      opacity:1,
      transition:{
        duration:0.5
      }, 
    },
    initialRight:{
      x:"100%",
      opacity:0
    },
    animateRight:{
      x:0,
      opacity:1,
      transition:{
        duration:0.5
      }, 
    },

  }
  return (
      <div className="grid grid-cols-4 h-full -z-50">

      {/* frontend */}
      <Skill_component techStack="Front End" Techs={frontendTechs} variants={variants}/>

      {/* backend technologies */}
      <Skill_component techStack="Back end" Techs={backendTechs} variants={variants}/>

       {/* Programming Languages */}
       <Skill_component techStack="Languages" Techs={programingLanguages} variants={variants}/>

      {/* Programming Languages */}
      <Skill_component techStack="DBs & Tools" Techs={tools} variants={variants}/>

      </div>
  )
}

export default Skills