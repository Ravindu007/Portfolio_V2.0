import { useState } from 'react'
import Links from './Links/Links'
import ToggleButton from './button/ToggleButton'
import './sidebar.scss'
import {motion} from 'framer-motion'

const Sidebar = () => {


  const [open, setOpen] = useState(false)


  const variants = {
    open:{
      clipPath:"circle(1200px at 50px 50px)",
      transition:{
        delay:0,
        type:"spring",
        stiffness:400,
        damping:40
      }
    },
    closed:{
      clipPath:"circle(30px at 50px 50px)",
      transition:{
        delay:0,
        type:"spring",
        stiffness:800,
        damping:40
      }
    }
  }

  return (
    <motion.div 
      className='sidebar'
      animate = {open ? "open" : "closed"}
    >
      <motion.div 
        className="bg"
         variants={variants}
      >
        <Links open={open}/>
      </motion.div>
      <ToggleButton setOpen={setOpen} open={open}/>
    </motion.div>
  )
}

export default Sidebar