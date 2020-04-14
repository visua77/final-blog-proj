import React from 'react'

export const Footer = () => {

  return (
    <div className="footer-wrapper">
      <footer>Copyright: {(new Date().getFullYear())} <i className="fab fa-facebook-square"></i> <i className="fab fa-instagram-square"></i> <i className="fab fa-pinterest-square"></i></footer>
    </div>
  )
}

