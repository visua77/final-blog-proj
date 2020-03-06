import React, { useEffect, useState } from 'react'
import moment from 'moment'

const URL = 'https://happy-happty.herokuapp.com/'

export const BlogPost = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setPosts(json)
      })
  }, [])

  return (

    <article>
      {posts.map((onepost) => (
        <div className="card"><p>Fetching data from the happythoughts API just to check the connection works</p><h2>{onepost.message}</h2></div>
      ))}

    </article>

  )
}

