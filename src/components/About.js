import React from 'react'
import Image from '../img/73495182_10156774359523473_6779904046250590208_o.jpg' // relative path to image

export const About = () => {
  return (
    <div className="wrapper-card">
      <div><img src={Image} className="img-about" alt="about img" /></div>
      <div className="about-txt"><h3>About this blog</h3> <p>This is a comprehensive blog about a magical place called the Sóller valley, situated nort of Palma de Mallorca just 20 minutes by car on the other side of the Serra de Tramuntana. The weather is lovely, the med is nice and warm until october and the people are friendly!</p></div>
    </div>
  )
}