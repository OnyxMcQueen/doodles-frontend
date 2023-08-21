import React from 'react'
import { useNavigate } from 'react-router-dom';

import './ErrorPage.css';

function ErrorPage() {
    const navigate = useNavigate();

  return (
    <div className='error-page-container container'>
        <h2 className='error-page-title'>Uh Oh! It looks like you've wandered off! This part of the wesbite doesn't exist!</h2>
        <img className='error-page-image' src='https://media.istockphoto.com/id/1145211114/vector/insane-messy-way-complicated-destination-illustration-concept-graphic-tangled-scribble-line.jpg?s=612x612&w=0&k=20&c=g8Ltiw9w_vJje316i2CkldwPtrVag8TW-JUiZ_yVSZU=' alt='Squiggly Line with two points on either side' />
        <br />
        <button className='error-button' onClick={() => {navigate(`/`)}}>Home Page</button>
    </div>
  )
}

export default ErrorPage