import React from 'react'
import moment from 'moment'

export const BlogPost = (props) => {
  const { message, createdAt, _id } = props.thought
  return (
    <div className="card">
      <article>
        <h1>{message}</h1>
        {/* <p className="theDate">{moment(createdAt).fromNow()}</p> */}
      </article>
    </div>
  )
}

