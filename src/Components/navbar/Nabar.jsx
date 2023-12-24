import './Navbar.scss'

const Nabar = () => {
  return (
    <div className='navbar'>
      {/* Sidebar */}
      <div className="wrapper">
        <span>Ravindu</span>
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