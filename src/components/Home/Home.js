import React from 'react'

import Carousel from '../Carousel/Carousel'

import './Home.css'

function Home() {
  return (
    <div className='container home-container'>
      <h1 className='home-title'>Welcome to Pencil Palette</h1>

      <Carousel />
      <br />
      <br />
    </div>
  )
}

export default Home