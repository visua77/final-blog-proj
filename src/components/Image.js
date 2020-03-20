import React from 'react'

export const Image = (props) => {
  return (
    <div className="card-img-flex" key={props.id} id={props.id} onClick={() => props.setCurrentImg(props)}>
      <img src={props.src} className="card-img" alt={props.src} />
    </div>
  )
}
export default Image;