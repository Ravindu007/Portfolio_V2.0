import Links from './Links/Links'
import './sidebar.scss'
import {motion} from 'framer-motion'

  const Sidebar = ({open, setOpen, initialLoad}) => {

  const sidebarClass = initialLoad ? 'sidebar-hidden' : '';

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
      },
    },
  }

  return (
    <motion.div 
      className= {`sidebar bg-white ${sidebarClass}`}
      animate = {open ? "open" : "closed"}
    >
      <motion.div 
         className="bg"
         variants={variants}
      >
        <Links open={open}/>
      </motion.div>

      {/* toggle button */}
      <button 
          onClick={()=> setOpen( prev => !prev)}
        >
          {
          open 
            ? 
          <img src="./icons/close.svg"/>
            :  
          <img  src='./icons/open.svg'/>}
        </button>
    </motion.div>
  )
}

export default Sidebar