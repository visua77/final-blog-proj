import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import PlaceholderImg from '../img/73495182_10156774359523473_6779904046250590208_o.jpg' // relative path to image

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
              <h2>{onepost.headline}</h2>
              <div className="txt-cont">{onepost.textOne}</div>
              <p><Link key={onepost._id} to={`/blog/${onepost._id}`}>Read more</Link></p>
              <p>Created: {moment(onepost.createdAt).fromNow()}</p>
            </div>
            <div className="img-empty"><img src={onepost.imgName} className="img-posts" /></div>
          </div>
        ))}
      </div>
    </div>

  )
}
