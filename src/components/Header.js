import React, { useState, useEffect } from 'react'

export const Header = () => {
  return (
    <div className="header-wrapper">
      <header><h1>Sóller Travel Blog</h1>
        <div className="soc-media"><i class="fab fa-facebook-square"></i> <i class="fab fa-instagram-square"></i> <i class="fab fa-pinterest-square"></i></div>
      </header>
    </div>
  )
}

