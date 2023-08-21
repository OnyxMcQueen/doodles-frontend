import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { ClapButton, LikeButton, UpdownButton } from '@lyket/react';

import Spinner from '../Spinner/Spinner';

import './Doodle.css';


function Doodle() {
    const url = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const { id } = useParams();
    
    const [doodle, setDoodle] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    async function getDoodleById(){
        setIsLoading(true);
        try{
            let result = await axios.get(`${url}/doodles/${id}`);
            setDoodle(result.data);
            setIsLoading(false);
        }
        catch(error){
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getDoodleById();
    }, []);


    // function formatDate(date){
    //     let dateString = date;
    //     let indexOfT = dateString.indexOf('T');
    //     let dateWithoutTime = dateString.substring(0, indexOfT);

    //     return dateWithoutTime;
    // }

    function handleBack(){
        navigate('/doodles');
    }

    function handleEdit(){
        navigate(`/doodles/${id}/edit`);
    }

    async function handleDelete(){
        const confirmDelete = window.confirm("You're about to delete this doodle. Are you sure you want to do this?");
        if(confirmDelete){
            try{
                await axios.delete(`${url}/doodles/${id}`);
                alert("This doodle has been deleted.");
                navigate('/doodles');
            }
            catch(error){
                console.log(error);
            }
        }
    }
    

  return (
   <>
        <div className='container single-doodle-container'>
            {
                isLoading ? (<Spinner />) : (
                    
                        doodle && (
                            <>
                                <h2 className='single-doodle-title'>{doodle.title}</h2>
        
                                <img className='single-doodle-image circular-shadow' src={doodle.image_url} alt='Single Doodle Art' />
                                <br />
                                <span style={{fontStyle: 'italic', fontSize: 'x-small', color: 'rgb(182, 172, 172)'}}>(YYYY-MM-DD)</span>
                                <br />
                                <span style={{fontStyle: 'italic', fontSize: 'x-small', color: 'rgb(182, 172, 172)'}}>{doodle.created_date.substring(0, 10)}</span>
        
                                <blockquote className="single-doodle-blockquote text-center">
                                    <p className="mb-0">"{doodle.doodle_description}"</p>
                                    <br />
                                    <footer className="blockquote-footer">{doodle.artist_name}</footer>
                                </blockquote>
        
                                <div>
                                    <h3>Enjoying this doodle? Show your appreciation!</h3>
                                    <LikeButton id='i-like-this-doodle' component={ClapButton.templates.Heart}/>
                                </div>
        
                                <br />
                                <br />
        
                                <button onClick={handleBack} className='single-doodle-button'>Back</button>
                                <button onClick={handleEdit} className='single-doodle-button'>Edit</button>
                                <button onClick={handleDelete} className='single-doodle-button'>Delete</button>
                            </>
                        )
                    
                )
            }
        </div>
   </>
  )
}

export default Doodle