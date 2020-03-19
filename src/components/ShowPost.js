import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'

//const URL = 'https://the-soller-blog.herokuapp.com/'
const URL = 'http://localhost:8080/blogposts'

//const URL2 = 'http://localhost:8080/blogposts/:id/comments'

export const ShowPost = () => {
  const params = useParams()
  const [post, setPost] = useState([])
  const [commentBody, setCommentBody] = useState('')
  const [commentArray, setCommentArray] = useState([])
  //const [postedMessage, setPostedMessage] = useState('')

  const handleSubmit = () => {
    fetch(`http://localhost:8080/blogposts/${params.slug}/comments`, {
      method: 'POST',
      body: JSON.stringify({ message: commentBody }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => setCommentBody(''))
      //.then(() => setCommentArray(json.comments))
      
    window.location.reload(true)
    //console.log(commentBody)
  }

  useEffect(() => {
    fetch(`http://localhost:8080/blogposts/${params.slug}`)
      .then((res) => res.json())
      .then((json) => {
        setCommentArray(json.comments)
      })
  }, [setCommentArray])

  //console.log(commentArray.comments)

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setPost(json)
      })
  }, [])

  const postMatch = post.find((id) => id._id === params.slug)

  return (
    <div>
      <div className="card">
        <img src={postMatch && postMatch.imgName} className="img-posts-large" alt="img" /><h2>{postMatch && postMatch.headline}</h2>
        <p>{postMatch && postMatch.text}</p>
        <p className="white-p">Posted: {postMatch && moment(postMatch.createdAt).fromNow()}</p>
      </div>

      <div className="card">
        <h3>Please leave a comment:</h3>
        <form onSubmit={handleSubmit}>
          <textarea rows="3" value={commentBody} onChange={(e) => setCommentBody(e.target.value)} />
        </form>
        <p><button className="theSubmit" type="submit" onClick={handleSubmit}>Send comment</button></p>
        <h3>Comments:</h3>
        <div>{commentArray.map((thought) => (
          <p className="comments">{thought.message}</p>
        ))}
        </div>
      </div>
    </div>
  )
}