import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Admin } from './components/Admin'
import { BlogPosts } from './components/BlogPosts'
import { ShowPost } from './components/ShowPost'
import { Images } from './components/Images'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import './css/styles.css'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
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
            <Route path="/images" exact>
              <Header />
              <Nav />
              <Images />
              <Footer />
            </Route>
            <Route path="/contact" exact>
              <Header />
              <Nav />
              <Contact />
              <Footer />
            </Route>
            <Route path="/admin" exact>
              <Header />
              <Nav />
              <Admin />
              <Footer />
            </Route>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  )
}

