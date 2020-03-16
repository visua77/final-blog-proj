import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { HappyThought } from './HappyThought'
import { HappyForm } from './HappyForm'
import PlaceholderImg from '../img/73495182_10156774359523473_6779904046250590208_o.jpg' // relative path to image

//const URL = 'https://the-soller-blog.herokuapp.com/'
const URL = 'http://localhost:8080/blogposts'
//const URL2 = 'http://localhost:8080/blogposts/:id/comments'

export const ShowPost = () => {
  const params = useParams()
  const [post, setPost] = useState([])
  const [commentBody, setCommentBody] = useState('')

  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState('')

  const tester = `http://localhost:8080/blogposts/${params.slug}/comments`
  console.log(tester)

  //console.log(params)

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [postedMessage])

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
        {/* <HappyForm onFormSubmit={handleFormSubmit} /> */}
        {/*  {thoughts.map(thought => (
          <HappyThought key={thought._id} thought={thought} onLike={onLike} />
        ))} */}
      </div>
    </div>
  )
}