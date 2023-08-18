import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './EditDoodle.css'

function EditDoodle() {
    const { id } = useParams();
  return (
    <div className='edit-doodle-container'>
        <h2>The edit doodle form goes here, this doodle's ID is {id}.</h2>
    </div>
  )
}

export default EditDoodle