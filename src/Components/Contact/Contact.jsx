import React, { useState , useRef} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [social, setSocial] = useState([
    {id:1, link:"", logo:"./icons/linkedIn.png"},
    {id:2, link:"", logo:"./icons/github.png"},
    {id:3, link:"", logo:"./icons/fb.png"},
    {id:4, link:"", logo:"./icons/twitter.png"}
  ])

  const form = useRef();

  const [name, setName] = useState("")
  const [email,setEmail] = useState("")
  const[message,setMessage] = useState("")

  const [showstate, setShowState] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    setName("")
    setEmail("")
    setMessage("")
    emailjs.sendForm('service_b1gwgfo', 'template_gxzjm6l', form.current, 'dIoRSsrphw9avWH4n')
      .then(() => {
        setError(false)
        setShowState(true)
      }, (error) => {
        setError(true)
        setShowState(true)
      });
    };

  const variants = {
    inputInitial:{
      opacity:0,
      x:100,
    },
    inputAnimate:{
      opacity:1,
      x:0,
      transition:{
        type:"spring",
        stiffness:400,
        damping:10,
        staggerChildren:0.4
      },
    },
    leftInitial:{
      opacity:0,
      y:100,
    },
    leftAnimate:{
      opacity:1,
      y:0,
      transition:{
        type:"spring",
        stiffness:400,
        damping:10,
        staggerChildren:0.4
      }
    },
    hoverIcon:{
      scale:0.75
    },
    scrollInitial:{
      y:0
    },
    scrollToTop:{
      y:5,
      transition:{
        repeat:"Infinity",
        duration:0.5
      }
    }
  }


  return (
    <div className='contact px-10 py-6'>
      <div className="grid grid-cols-2">
        {/* contact me */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-y-5">
          <h1 className='text-4xl font-semibold md:font-bold md:text-7xl'>CONTACT ME</h1>

          <div className="address">
            <p>Ravindu Dharmadasa</p>
            <p>4/A, Wattegedara,</p>
            <p>Minuwangoda</p>
            <p>11550</p>
            <p>Sri Lanka</p>
          </div>

          <div className="social-media flex gap-5 mb-20">
            {social.map((item) => (
              <motion.a key={item.id} href={item.link}  variants={variants} initial="leftInitial"   whileInView="leftAnimate">
                <motion.img variants={variants} whileHover="hoverIcon" src={item.logo} alt="" width={25}/>
              </motion.a>
            ))}
          </div>
        </div>

        {/* email */}
        <motion.div className="col-span-2 md:col-span-1" variants={variants}>
          <form ref={form} onSubmit={sendEmail}>

              <motion.div className="form-group flex flex-col" variants={variants} initial="inputInitial" whileInView="inputAnimate">
                <label>Name</label>
                <input type="text" className='rounded-md py-1 px-1 bg-gray-50 text-black' placeholder='Enter Your Name Here' name='user_name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
              </motion.div>

              <motion.div className="form-group flex flex-col" variants={variants} initial="inputInitial" whileInView="inputAnimate">
                <label>Email</label>
                <input type="text" className='rounded-md py-1 px-1 bg-gray-50 text-black' placeholder='Enter Your Email address Here' name='user_email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
              </motion.div>

              <motion.div className="form-group flex flex-col" variants={variants} initial="inputInitial" whileInView="inputAnimate">
                <label>Message</label>
                <textarea id="" cols="30" rows="5" className='rounded-md py-1 px-1 bg-gray-50 text-black' placeholder='Leave a message for me' name='user_message' value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
              </motion.div>
              <div className="flex justify-end items-center gap-2">
                <p>SEND TO: <span className='text-primary'>ravindu0504@gmail.com</span></p>
                <button className='styleBtn' type="submit" value="Send">SEND</button>
              </div>
              <div className="message flex justify-center font-semibold">
                <p>{showstate ? (error ? "Sorry could not send the Message": "Message sent successfully"): ""}</p>
              </div>
          </form>

        </motion.div>
      </div>
      <div className="row flex justify-end">
        <motion.button 
          className='fixed bottom-0 right-0' 
          onClick={()=>{
          window.scrollTo({top: 0, behavior: 'smooth'});
          }}
          variants={variants}
          initial="scrollInitial"
          animate="scrollToTop"
        >
          <img src="./icons/scroll.png" className='p-2' alt="" />
        </motion.button>
      </div>
    </div>
  )
}

export default Contact