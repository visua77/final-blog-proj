import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { About } from './components/About'
import { BlogPosts } from './components/BlogPosts'
import { ShowPost } from './components/ShowPost'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import './css/styles.css'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Nav />
            <BlogPosts />
            <Footer />
          </Route>
          <Route path="/about" exact>
            <Header />
            <Nav />
            <About />
            <Footer />
          </Route>
          <Route path="/blog/:slug" exact>
            <Header />
            <Nav />
            <ShowPost />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

