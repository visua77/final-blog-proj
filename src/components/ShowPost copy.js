import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { CommentsForm } from './CommentsForm'
import { Comments } from './Comments'

const URL = 'https://happy-happty.herokuapp.com/'

export const ShowPost = () => {
  const params = useParams()
  const [post, setPost] = useState([])
  const [thoughts, setThoughts] = useState([])
  const [postedMessage, setPostedMessage] = useState('')

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(json => setThoughts(json))
  }, [postedMessage])

  const handleFormSubmit = (message) => {
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => setPostedMessage(message))
  }

  const onLike = (thoughtId) => {
    console.log('logging sum shit', thoughtId)
    const updatedThoughts = thoughts.map(thought => {
      if (thought._id === thoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  //console.log(params)

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setPost(json)
      })
  }, [])
  //console.log(post)
  const postMatch = post.find((id) => id._id === params.slug)
  //console.log(postMatch)
  return (
    <div>
      <div className="card">
        <h3>{postMatch && postMatch.message}</h3>
        <p>Likes: {postMatch && postMatch.hearts}</p>
        <p>Posted: {postMatch && moment(postMatch.createdAt).fromNow()}</p>
      </div>
      <div className="card">
        <CommentsForm onFormSubmit={handleFormSubmit} />
        <Comments /></div>
    </div>

  )
}


/* return (
  <div className="mainContainer">
    <HappyForm onFormSubmit={handleFormSubmit} />
    {thoughts.map(thought => (
      <HappyThought key={thought._id} thought={thought} onLike={onLike} />
    ))}
  </div>
) */