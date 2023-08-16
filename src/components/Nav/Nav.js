import React from 'react'
import { Link } from 'react-router-dom';

import './Nav.css';

function Nav() {
  return (
    <nav className='navbar'>
      <Link className='logo' to='/'>
        <img className='navbar-img' src='https://media.istockphoto.com/id/458716003/photo/we-the-youth-by-keith-haring.jpg?s=612x612&w=0&k=20&c=v-Zs8OChKrpIva2OFQ2r-lCFNWKVcOfWWmFVAx4OL6o=' alt='Logo for website'/>
      </Link>

      <div className='menu'>
      <Link to='/doodles'><h3>View All Doodles</h3></Link>    
      <Link to='/new-doodle'><h3>Create a Doodle</h3></Link>
      <Link to='/about-me'><h3>About Me</h3></Link>
      </div>
    </nav>
  )
}

export default Nav