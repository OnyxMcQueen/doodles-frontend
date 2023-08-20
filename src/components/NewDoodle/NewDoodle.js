import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './NewDoodle.css';

function NewDoodle() {
    const url = process.env.REACT_APP_API_URL;

    const navigate = useNavigate();

    const [newDoodle, setNewDoodle] = useState({
        artist_name: "",
        created_date: "",
        doodle_description: "",
        image_url: "",
        title: ""
    });

    function handleChange(e){
        setNewDoodle({
            ...newDoodle,
            [e.target.id]: e.target.value,
        })
    }


    async function handleSubmit(e) {
        e.preventDefault();
        try{
            let result = await axios.post(`${url}/doodles/`, newDoodle);
            alert("Success! Now let's see your doodle!" )
            navigate(`/doodles/${result.data.id}`);
        }
        catch(error){
            console.log(error);
        }
    }


  return (
    <div className='new-doodle-container'>
        <h2 className='new-doodle-title'>Create New Doodle</h2>

        <blockquote className="new-doodle-blockquote text-center">
            <p className="mb-0">Don't see a doodle you like? Add your favorite!</p>
        </blockquote>

        <form className='doodle-new-form' onSubmit={handleSubmit}>

            <div className='form-group mx-5'>
                <label htmlFor='artist_name'>Artist Name</label>
                <input required type='text' className='form-control' id='artist_name' value={newDoodle.artist_name} onChange={handleChange}/>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='created_date'>Date Created</label>
                <br />
                <span className='small'>Please ensure the date matches the exact format *include dashes* : YYYY-MM-DD</span>
                <input required type='text' className='form-control' id='created_date' value={newDoodle.created_date.substring(0, 10)} onChange={handleChange}/>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='doodle_description'>Description of Doodle</label>
                <textarea required type='text' className='form-control' id='doodle_description' value={newDoodle.doodle_description} onChange={handleChange}/>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='image_url'>Image of Doodle</label>
                <br />
                <span className='small'>Provide an image URL link starting with either http or https</span>
                <input required type='text' className='form-control' id='image_url' value={newDoodle.image_url} onChange={handleChange}/>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='title'>Doodle Title</label>
                <input required type='text' className='form-control' id='title' value={newDoodle.title} onChange={handleChange}/>
            </div>

            <button type='button' className='new-doodle-button' onClick={() => navigate(`/doodles`)}>Back</button>
            <button type='submit' className='new-doodle-button'>Submit</button>

        </form>


    </div>
  )
}

export default NewDoodle