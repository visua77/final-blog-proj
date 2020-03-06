import React, { useEffect, useState } from 'react'
import { BlogPost } from './components/BlogPost'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './css/styles.css'

const URL = 'https://happy-happty.herokuapp.com/'

export const App = () => {
  const [blogPosts, setBlogPosts] = useState([])
  //const [postedMessage, setPostedMessage] = useState('')

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(json => setBlogPosts(json))
  }, [])

  console.log(setBlogPosts)

  return (
    <div>
      <Header />
      {blogPosts.map(post => (
        <BlogPost key={blogPosts._id} />
      ))}
     {/*  <BlogPost />
      <BlogPost />
      <BlogPost /> */}
      <Footer />
    </div>
  )
}

