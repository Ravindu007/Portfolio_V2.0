import {motion} from 'framer-motion'
import './Navbar.scss'
import Sidebar from '../sidebar/Sidebar'
import { useEffect, useState } from 'react'

const Nabar = () => {
  const [open, setOpen] = useState(false)

  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setInitialLoad(false);
    }, 200); // Adjust the delay as needed

    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <div className='navbar'>
      <Sidebar open={open} setOpen={setOpen} initialLoad={initialLoad} />
      <div className="wrapper px-16">
        <motion.span
          className='hidden md:block'
          initial={{opacity:0, scale:1}}
          transition={{duration:0.5}}
          whileInView={{opacity:1, scale:1}}
        >Ravindu</motion.span>
        <div className="social pl-16 md:pl-0">
          <a href=""><img src="./icons/linkedIn.png" alt="" /></a>
          <a href=""><img src="./icons/github.png" alt="" /></a>
          <a href=""><img src="./icons/fb.png" alt="" /></a>
          <a href=""><img src="./icons/twitter.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Nabar