import React, { useState, useEffect } from 'react'

const URL = 'http://localhost:8080/images'

export const Images = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setImages(json)
      })
  }, [])

  return (
    <div className="wrapper-card-img">
      {images.map((img) => (
        <div key={img._id} className="card-img-flex">
          <img src={img.imgUrl} className="card-img" />
        </div>
      ))}
    </div>
  )
}

{ /* <div className="postersCont">
  {posters.map((poster) => (
    <div className="posters" key={poster.id}>
      <Link to={`details/${poster.id}`}><img src={`http://image.tmdb.org/t/p/w342/${poster.poster_path}`} alt="" /></Link>
      <div className="posterInfo">{poster.original_title}<br></br>
        {poster.release_date}
      </div>

    </div>
  ))}
</div> */ }