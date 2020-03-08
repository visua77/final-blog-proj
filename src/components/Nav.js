import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className="main-nav">
      <span className="nav-items"><Link to="/about/">About</Link></span>
      <span className="nav-items">Places</span>
      <span className="nav-items">Accomodation</span>
      <span className="nav-items">Restaurants</span>
      <span className="nav-items"><Link to="/contact/">Contact</Link></span>
    </div>
  )
}

