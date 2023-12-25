import React, { useState } from 'react'
import {motion} from 'framer-motion'



const cardVariants = {
  initialImage:{
    y:300,
    opacity:0,
  },
  animateImage:{
    opacity:1,
    y:10,
    transition:{
      type: "spring",
      sfiffness:200,
      damping:10,
      bounce: 0.4,
      duration: 1
    }
  },
  logoInitial:{
    opacity:0,
    x:15
  },
  logoAnimate:{
    opacity:1,
    x:0,
    rotate:360,
    transition:{
      type: "spring",
      sfiffness:400,
      damping:10,
      bounce: 0.4,
      duration: 0.8,
      staggerChildren:1
    }
  },

}

const Services = () => {

  const [services, setServices] = useState([
    {id:1, name:"Frontend Development", img:"./services/frontend.svg", desc:"I am frontend developer who can create web sites according to different customer requirements and deliver seamless UI/UX experience", logos:[{id:1, icon:"/services/frontend/f1.png"},{id:2, icon:"/services/frontend/f2.png"},{id:3, icon:"/services/frontend/f3.png"}]},

    {id:2, name:"Backend Development", img:"./services/backend.svg", desc:"I am backend developer who can create dynamic web sites with seamless integration with different databases", logos:[{id:1, icon:"/services/backend/b1.png"},{id:2, icon:"/services/backend/b2.png"},{id:3, icon:"/services/backend/b3.png"}]},

    {id:3, name:"Fullstack Development", img:"./services/fullstack.svg", desc:"I am fullstack developer who can work in both frontend and backend aspects of a modern web application", logos:[{id:1, icon:"/services/fullstack/f1.png"},{id:2, icon:"/services/fullstack/f2.png"},{id:3, icon:"/services/fullstack/f3.png"}]}
  ])

  return (
    <div className='services'>
      <div className="grid grid-cols-3 m-5">

        {services.map((service) => (
          <div className="col-span-3 md:col-span-1 rouded-md  shadow-2xl shadow-primary mx-2 px-5 py-2">
            <div className="title-section flex justify-center text-xl font-bold underline underline-offset-4">{service.name}</div>
            <motion.div className="img-section flex justify-center items-center" variants={cardVariants} initial="initialImage" whileInView="animateImage">
              <img src={service.img} alt="" width={300}/>
            </motion.div>
            <div className="desc-section flex text-justify">{service.desc}</div>
            <div className="icons-section flex justify-center gap-7">
              {service.logos.map((logo)=>(
                <motion.img key={logo.id} src={logo.icon} alt="" variants={cardVariants} initial="logoInitial" whileInView="logoAnimate" width={25}/>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Services