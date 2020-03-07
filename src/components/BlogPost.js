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
    <div>
      {/* <h3>Latest posts:</h3> */}
      <article>
        {posts.map((onepost) => (
          <div className="card" key="_id">
            <h2>{onepost.message}</h2>
            <p>Fetching data from the happythoughts API just to check that the connection works</p>
            <h3>Hearts: {onepost.hearts}</h3>
            <p>{moment(onepost.createdAt).fromNow()}</p>
          </div>
        ))}
      </article>
    </div>

  )
}

