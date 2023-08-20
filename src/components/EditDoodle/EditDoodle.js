import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'

import './EditDoodle.css'

function EditDoodle() {
    const url = process.env.REACT_APP_API_URL;
    const { id } = useParams();

    const navigate = useNavigate();

    const [selectedDoodle, setSelectedDoodle] = useState({
        artist_name: "",
        created_date: "",
        doodle_description: "",
        image_url: "",
        title: ""
    })

    async function fetchDoodleData(){
        try{
            let result = await axios.get(`${url}/doodles/${id}`);
            setSelectedDoodle(result.data);
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchDoodleData();
    }, []);


    function handleChange(e){
        setSelectedDoodle({
            ...selectedDoodle,
            [e.target.id]: e.target.value,
        })
    }

    async function handleSubmit(e){
        e.preventDefault();

        try{
            let result = await axios.put(`${url}/doodles/${id}`, selectedDoodle);
            alert("You've updated this doodle! Now let's see the results.")
            navigate(`/doodles/${id}`);
        }
        catch(error){
            console.log(error)
        }
    }


  return (
    <div className='edit-doodle-container'>
        <h2 className='edit-doodle-title'>Edit Doodle.</h2>

        <blockquote className="edit-doodle-blockquote text-center">
            <p className="mb-0">Not a fan of this doodle? Simply edit the details!</p>
        </blockquote>

        <form className='doodle-edit-form' onSubmit={handleSubmit}>

            <div className='form-group mx-5'>
                <label htmlFor='artist_name'>Artist Name</label>
                <input required type='text' className='form-control' id='artist_name' value={selectedDoodle.artist_name} onChange={handleChange}/>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='created_date'>Date Created</label>
                <br />
                <span className='small'>Please ensure the date matches the exact format *include dashes* : YYYY-MM-DD</span>
                <input required type='text' className='form-control' id='created_date' value={selectedDoodle.created_date.substring(0, 10)} onChange={handleChange}/>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='doodle_description'>Description of Doodle</label>
                <textarea required type='text' className='form-control' id='doodle_description' value={selectedDoodle.doodle_description} onChange={handleChange}/>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='image_url'>Image of Doodle</label>
                <br />
                <span className='small'>Provide an image URL link starting with either http or https</span>
                <input required type='text' className='form-control' id='image_url' value={selectedDoodle.image_url} onChange={handleChange}/>
            </div>

            <div className='form-group mx-5'>
                <label htmlFor='title'>Doodle Title</label>
                <input required type='text' className='form-control' id='title' value={selectedDoodle.title} onChange={handleChange}/>
            </div>

            <button type='button' className='edit-doodle-button' onClick={() => navigate(`/doodles/${id}`)}>Back</button>
            <button type='submit' className='edit-doodle-button'>Submit</button>

        </form>

    </div>
  )
}

export default EditDoodle