import React from 'react'
import { Link } from 'react-router-dom'

const changeColor = () => {
  
  const element = document.getElementById('01')
  // element.style.color = 'red'

}

export const Nav = () => {
  return (
    <div className="main-nav">
      <span className="nav-items"><Link to="/" id="01" onClick={changeColor}>Blog</Link></span>
      <span className="nav-items"><Link to="/about/" id="02" onClick={changeColor}>About</Link></span>
      <span className="nav-items"><Link to="/images/" id="03" onClick={changeColor}>Photos</Link></span>
      <span className="nav-items-no">Accomodation</span>
      <span className="nav-items-no">Restaurants</span>
      <span className="nav-items"><Link to="/contact/" id="04" onClick={changeColor}>Contact</Link></span>
    </div>
  )
}

