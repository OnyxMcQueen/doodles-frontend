import React from 'react'

import './Carousel.css'

function Carousel() {
  return (
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="5000">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 slider-image" src="https://img.freepik.com/premium-vector/monster-line-art-doodle-pattern-design-vector_90573-639.jpg?w=2000" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 slider-image" src="https://static.vecteezy.com/system/resources/previews/005/891/677/original/abstract-arrows-ribbons-crowns-hearts-explosions-and-other-elements-in-hand-drawn-style-for-concept-design-doodle-illustration-template-for-decoration-free-vector.jpg" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 slider-image" src="https://static.vecteezy.com/system/resources/previews/023/863/498/original/abstract-doodle-art-pattern-doodle-wallpaper-vector.jpg" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="sr-only">Next</span>
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
  </a>
</div>
  )
}

export default Carousel