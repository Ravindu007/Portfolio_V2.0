import React from 'react'

const Contact = () => {
  return (
    <div className='contact px-10 py-6'>
      <div className="grid grid-cols-2">
        {/* contact me */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-y-10">
          <h1 className='text-7xl'>CONTACT ME</h1>

          <div className="address">
            <p>Ravindu Dharmadasa</p>
            <p>4/A, Wattegedara,</p>
            <p>Minuwangoda</p>
            <p>11550</p>
            <p>Sri Lanka</p>
          </div>

          <div className="social-media flex gap-5">
            <a href=""><img src="./icons/linkedIn.png" alt="" width={25}/></a>
            <a href=""><img src="./icons/github.png" alt="" width={25}/></a>
            <a href=""><img src="./icons/fb.png" alt="" width={25}/></a>
            <a href=""><img src="./icons/twitter.png" alt="" width={25}/></a>
          </div>
        </div>

        {/* email */}
        <div className="col-span-2 md:col-span-1">
          <form action="">
              <div className="form-group flex flex-col">
                <label>Name</label>
                <input type="text" className='rounded-md py-1 px-1 bg-gray-50 text-black' placeholder='Enter Your Name Here' />
              </div>

              <div className="form-group flex flex-col">
                <label>Email</label>
                <input type="text" className='rounded-md py-1 px-1 bg-gray-50 text-black' placeholder='Enter Your Email address Here' />
              </div>

              <div className="form-group flex flex-col">
                <label>Message</label>
                <textarea name="" id="" cols="30" rows="5" className='rounded-md py-1 px-1 bg-gray-50 text-black' placeholder='Leave a message for me'></textarea>
              </div>
              <div className="flex justify-end items-center gap-2">
                <p>SEND TO: <span className='text-primary'>ravindu0504@gmail.com</span></p>
                <button className='styleBtn'>SEND</button>
              </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Contact