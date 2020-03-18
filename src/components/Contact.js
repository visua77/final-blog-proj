import React from 'react'
import Image from '../img/nic.jpg'

export const Contact = () => {
  return (

    <div className="wrapper-card">
      <div><img src={Image} className="img-about" alt="about img" /></div>
      <div className="about-txt"><h3>Contact Information</h3>
        <p>Niclas Binnquist</p>
        <p>Phone: +(46) 73 508 05 24</p>
      <p>Email: <a href="mailto: nicznet@hotmail.com">Send mail</a></p></div>
    </div>
  )
}