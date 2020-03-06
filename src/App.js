import React from 'react'
import { BlogPost } from './components/BlogPost'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './css/styles.css'

export const App = () => {
  return (
    <div>
      <Header />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <Footer />
    </div>
  )
}

