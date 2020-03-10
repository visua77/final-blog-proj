import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { HappyThought } from './HappyThought'
import { HappyForm } from './HappyForm'
import PlaceholderImg from '../img/73495182_10156774359523473_6779904046250590208_o.jpg' // relative path to image
import moment from 'moment'

const URL = 'https://the-soller-blog.herokuapp.com/'
//const URL = 'http://localhost:8080/'

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

  return (
    <div>
      <div className="card">
        <img src={PlaceholderImg} className="img-posts-large" /><h3>{postMatch && postMatch.headline}</h3>
        <p>{postMatch && postMatch.text}</p>
        <p>Posted: {postMatch && moment(postMatch.createdAt).fromNow()}</p>
      </div>

      <div className="card">
        <HappyForm onFormSubmit={handleFormSubmit} />
        {thoughts.map(thought => (
        <HappyThought key={thought._id} thought={thought} onLike={onLike} />
        ))}
      </div>
    </div>
  )
}