import React, { useState, useEffect } from 'react'
import { Image } from './Image'

const URL = 'http://localhost:8080/images'

export const Images = () => {
  const [images, setImages] = useState([])
  const [img, currentImg] = useState('')

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setImages(json)
      })
  }, [])

  const setCurrentImg = (imageProps) => {
    currentImg(imageProps)
    console.log('img', img)
  }

  return (
    <div className="wrapper-card-img">
      {img && (
        <div className="myWrapper"><div><img src={img.src} className="open-img" alt={img.src} />
          <div className="close-but"><button type="button" onClick={event => setCurrentImg('')} className="my-but">close</button></div></div>
        </div> )}

      {
        images.map((img) => (
          <Image
            key={img._id}
            id={img._id}
            src={img.imgUrl}
            altTag={img.imgUrl}
            setCurrentImg={setCurrentImg} />
        ))
      }
    </div>
  )
}