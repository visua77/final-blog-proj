import React, { useState } from 'react'

const URL = 'http://localhost:8080/blogposts'

export const Admin = () => {
  const [commentBody, setCommentBody] = useState('')
  const [commentBody2, setCommentBody2] = useState('')
  const [commentBody3, setCommentBody3] = useState('')
  const [commentHeader, setCommentHeader] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [imgUrl2, setImgUrl2] = useState('')
  const [imgUrl3, setImgUrl3] = useState('')

  const handleSubmit = () => {
    fetch((URL), {
      method: 'POST',
      body: JSON.stringify({ headline: commentHeader, textOne: commentBody, textTwo: commentBody2, textThree: commentBody3, imgName: imgUrl, imgName2: imgUrl2, imgName3: imgUrl3 }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => setCommentBody(''))
  }

  return (
    <div className="card">
      <h3>Admin page:</h3>

      <form onSubmit={handleSubmit}>
        <p>Header: <input type="text" id="lname" name="lname" onChange={(e) => setCommentHeader(e.target.value)} /></p>
        <p>Text1/ingress:</p>
        <p><textarea rows="12" value={commentBody} onChange={(e) => setCommentBody(e.target.value)} /></p>
        <p>Text2:</p>
        <p><textarea rows="12" value={commentBody2} onChange={(e) => setCommentBody2(e.target.value)} /></p>
        <p>Text3:</p>
        <p><textarea rows="12" value={commentBody3} onChange={(e) => setCommentBody3(e.target.value)} /></p>
        <p>Imagename01:(../blogpost20.jpg) <input type="text" id="lname2" name="lname2" onChange={(e) => setImgUrl(e.target.value)} /></p>
        <p>Imagename02:(../blogpost20.jpg) <input type="text" id="lname3" name="lname3" onChange={(e) => setImgUrl2(e.target.value)} /></p>
        <p>Imagename02:(../blogpost20.jpg) <input type="text" id="lname4" name="lname4" onChange={(e) => setImgUrl3(e.target.value)} /></p>
      </form>
      <p><button className="theSubmit" type="submit" onClick={handleSubmit}>Publish</button></p>
    </div>
  )
}