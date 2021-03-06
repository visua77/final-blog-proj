import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const URL = 'https://the-soller-blog.herokuapp.com/blogposts'
//const URL = 'http://localhost:8080/blogposts'

export const BlogPosts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setPosts(json)
      })
  }, [])

  const testVar = posts[3]
  console.log(testVar)

  return (
    <div>
      <div>
        {posts.map((onepost) => (
          <div className="wrapper-card" key={onepost._id}>
            <div>
              <h2 className="h2-posts">{onepost.headline}</h2>
              <div className="txt-cont">{onepost.textOne}</div>
              <p><Link key={onepost._id} to={`/blog/${onepost._id}`}>Read more</Link></p>
              <p className="p-bg"><span className="span-strong">Created:</span> {moment(onepost.createdAt).fromNow()}</p>
            </div>
            <div className="img-empty"><img src={onepost.imgName} className="img-posts" alt="img" /></div>
          </div>
        ))}
      </div>
    </div>

  )
}
