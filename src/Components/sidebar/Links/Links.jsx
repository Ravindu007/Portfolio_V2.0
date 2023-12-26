import React, { useState } from 'react'
import {motion} from 'framer-motion'

const Links = ({open}) => {
  const [items, setItems] = useState([
    {id:1, name:"Hero",link:"hero"},
    {id:2, name:"Expertise",link:"skills"},
    {id:3, name:"Projects",link:"projects"},
    {id:4, name:"Education",link:"education"},
    {id:5, name:"Services",link:"services"},
    {id:6, name:"Contact",link:"contact"},
  ])


  const variants = {
    visible:{
      opacity:1,
      transition:{duration:1.8}
    },
    hidden:{
      opacity:0,
    }
  }

  return (
    <motion.div 
      className='links' 
      variants={variants} 
      animate={open? "visible": "hidden"}
    >
      {items.map((item)=>(
        <motion.a whileHover={{scale:1.1}} whileTap={{scale:0.95}} key={item} href={`#${item.link}`}>{item.name}</motion.a>
      ))}
    </motion.div>
  )
}

export default Links