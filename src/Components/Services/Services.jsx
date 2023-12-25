import React, { useState } from 'react'

const Services = () => {

  const [services, setServices] = useState([
    {id:1, name:"Frontend Development", img:"./services/frontend.svg", desc:"I am frontend developer who can create web sites according to different customer requirements", logos:[{id:1, icon:"/services/frontend/f1.png"},{id:2, icon:"/services/frontend/f2.png"},{id:3, icon:"/services/frontend/f3.png"}]}
  ])

  return (
    <div className='services'>
      <div className="grid grid-cols-3">

        {services.map((service) => (
          <div className="col-span-3 md:col-span-1 rouded-md  shadow-md shadow-white gap-2 px-5 py-2">
            <div className="title-section flex justify-center text-xl font-bold underline underline-offset-4">{service.name}</div>
            <div className="img-section flex justify-center items-center">
              <img src={service.img} alt="" width={300}/>
            </div>
            <div className="desc-section flex text-justify">{service.desc}</div>
            <div className="icons-section flex justify-center gap-7">
              {service.logos.map((logo)=>(
                <img key={logo.id} src={logo.icon} alt="" />
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Services