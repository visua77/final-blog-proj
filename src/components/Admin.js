import React, { useState } from 'react'

const URL = 'http://localhost:8080/blogposts'

export const Admin = () => {
  const [commentBody, setCommentBody] = useState('')
  const [commentHeader, setCommentHeader] = useState('')
  const [imgUrl, setImgUrl] = useState('')

  const handleSubmit = () => {
    fetch((URL), {
      method: 'POST',
        body: JSON.stringify({ headline: commentHeader, text: commentBody, imgName: imgUrl }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => setCommentBody(''))
  }

  return (
    <div className="card">
      <h4>Admin page:</h4>

      <form onSubmit={handleSubmit}>
        <input type="text" id="lname" name="lname" onChange={(e) => setCommentHeader(e.target.value)} />
        <textarea rows="12" value={commentBody} onChange={(e) => setCommentBody(e.target.value)} />
        <input type="text" id="lname2" name="lname2" onChange={(e) => setImgUrl(e.target.value)} />
      </form>
      <p><button className="theSubmit" type="submit" onClick={handleSubmit}>Publish</button></p>
    </div>
  )
}