import React, { useEffect, useState } from 'react'
import { BlogPost } from './components/BlogPost'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import './css/styles.css'

export const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <BlogPost />
      <Footer />
    </div>
  )
}

