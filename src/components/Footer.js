import React, { useState, useEffect } from 'react'

export const Footer = () => {

  return (
    <div className="footer-wrapper">
          <footer>Copyright: {(new Date().getFullYear())} <i class="fab fa-facebook-square"></i> <i class="fab fa-instagram-square"></i> <i class="fab fa-pinterest-square"></i></footer>
    </div>
  )
}

