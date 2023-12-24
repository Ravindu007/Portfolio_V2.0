import React from 'react'

const ToggleButton = ({setOpen, open}) => {
  return (
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
  )
}

export default ToggleButton