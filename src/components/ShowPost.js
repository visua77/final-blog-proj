import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import PlaceholderImg from '../img/73495182_10156774359523473_6779904046250590208_o.jpg' // relative path to image

//const URL = 'https://the-soller-blog.herokuapp.com/'
const URL = 'http://localhost:8080/blogposts'

//const URL2 = 'http://localhost:8080/blogposts/:id/comments'

export const ShowPost = () => {
  const params = useParams()
  const [post, setPost] = useState([])
  const [commentBody, setCommentBody] = useState('')
  const [commentArray, setCommentArray] = useState([])
  const [postedMessage, setPostedMessage] = useState('')

  const tester = `http://localhost:8080/blogposts/${params.slug}/comments`
  console.log(tester)

  //console.log(params)

  const handleSubmit = () => {
    fetch(`http://localhost:8080/blogposts/${params.slug}/comments`, {
      method: 'POST',
      body: JSON.stringify({ message: commentBody }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => setPostedMessage(commentBody))
    console.log(commentBody)
  }

  useEffect(() => {
    fetch(`http://localhost:8080/blogposts/${params.slug}`)
      .then((res) => res.json())
      .then((json) => {
        setCommentArray(json.comments)
      })
  }, [])

  console.log(commentArray.comments)

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setPost(json)
      })
  }, [])

  //console.log(post)
  const postMatch = post.find((id) => id._id === params.slug)

  return (
    <div>
      <div className="card">
        <img src={PlaceholderImg} className="img-posts-large" alt="img" /><h3>{postMatch && postMatch.headline}</h3>
        <p>{postMatch && postMatch.text}</p>
        <p>Posted: {postMatch && moment(postMatch.createdAt).fromNow()}</p>
      </div>

      <div className="card">
        <form onSubmit={handleSubmit}>
          <textarea rows="3" value={commentBody} onChange={(e) => setCommentBody(e.target.value)} />
        </form>
        <p><button className="theSubmit" type="submit" onClick={handleSubmit}>Please leave a comment</button></p>

        <div>{commentArray.map((thought) => (
          <p>{thought.message}</p>
        ))}
        </div>
      </div>
    </div>
  )
}