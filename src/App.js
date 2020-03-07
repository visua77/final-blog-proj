import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { BlogPost } from './components/BlogPost'
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
            <BlogPost />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

