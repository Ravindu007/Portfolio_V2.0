import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect';


const TextAnimation = () => {
  return (
    <Typewriter
      options={{
        strings: ['Fullstack Developer', 'Frontend Developer', "Backend Developer"],
        autoStart: true,
        loop: true,
      }}
    />
  )
}

export default TextAnimation