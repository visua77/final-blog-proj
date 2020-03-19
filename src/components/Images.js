import React, { useState, useEffect } from 'react'

const URL = 'http://localhost:8080/images'

export const Images = () => {
  const [images, setImages] = useState([])
  const [img, setImg] = useState('')

  console.log(img)

  const showImg = () => {
    if (img) {
      document.getElementById('showImg').innerHTML = `<img src=${img} width="400" height=400>`
      document.getElementById('showImg').style.visibility = 'visible'
    }
    else {
      alert('error')
    }

}

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setImages(json)
      })
  }, [])

  return (
    <div className="wrapper-card-img">
      <div id="showImg"></div>
      {images.map((img) => (
        <div key={img._id} className="card-img-flex" onClick={(e) => setImg(img.imgUrl)}>
          <img src={img.imgUrl} className="card-img" onClick={showImg} alt={img.imgUrl} /> 
        </div>
      ))}
    </div>
  )
}

