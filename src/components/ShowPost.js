import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const URL = 'https://happy-happty.herokuapp.com/'

export const ShowPost = () => {
  const params = useParams()
  const [post, setPost] = useState([])

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
  console.log(postMatch)
  return (
    <div className="card">
      Blogpost
    </div>
  )
}