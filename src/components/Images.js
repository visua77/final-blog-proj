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

  const setCurrentImg = (e) => {
    currentImg(e.currentTarget)
    console.log('img', img)

  }

  return (
    <div className="wrapper-card-img">
      <div className="myWrapper"><img src={img.src} /></div>

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
