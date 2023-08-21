import React from 'react'
import { Link } from 'react-router-dom';

import './AboutMe.css'

function AboutMe() {

  return (
    <div className='about-me-container container'>
        <h2 className='about-me-title'>Onyx McQueen</h2>


        <blockquote className="single-doodle-blockquote text-center">
            <p className="mb-0">Welcome to my About Me page, where I'll share my journey, passions, and experiences that have shaped who I am today.</p>
        </blockquote>

        <div className='about-me-summary'>
            <p>
            Welcome to my world of doodles! I'm thrilled to share my passion for this unique art form with you. As a child, doodling was my refuge, a form of therapy that allowed me to channel my energy and express my emotions. In a fast-paced world where people turn to various tools and techniques to find calm, I found solace in the simple act of putting pen to paper.
            Doodling isn't just lines and shapes on a canvas for me; it's a profound means of communication. Each stroke captures my thoughts, feelings, and ideas in a way that words often can't. In a way, my doodles serve as a window into my soul, a visual diary that reveals the tapestry of my emotions.
            On this website, I invite you to explore the beauty and power of doodles. Just as my childhood experiences shaped my affinity for this art, I hope my creations resonate with you too. Whether you're seeking a creative outlet, a moment of tranquility, or a glimpse into the human mind's intricacies, doodles have something remarkable to offer.
            Thank you for joining me on this artistic journey. Together, let's celebrate the therapeutic magic of doodles and discover the profound emotions they can convey.
            </p>
        </div>

        <img className='about-me-image' src='https://www.ndtv.com/news/images/gadgets/harring1.jpg' alt='Keith Haring doodle art'/>
        <br />
        <Link to={`https://github.com/OnyxMcQueen`}><button className='about-me-button'>Find Me on Github!</button></Link>
    </div>
  )
}

export default AboutMe