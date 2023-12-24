import {motion} from 'framer-motion'
import './Navbar.scss'
import Sidebar from '../sidebar/Sidebar'

const Nabar = () => {
  return (
    <div className='navbar'>
      <Sidebar/>
      <div className="wrapper px-10">
        <motion.span
          initial={{opacity:0, scale:1}}
          transition={{duration:0.5}}
          whileInView={{opacity:1, scale:1}}
        >Ravindu</motion.span>
        <div className="social">
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