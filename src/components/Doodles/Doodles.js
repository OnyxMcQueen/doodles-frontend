import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Spinner from '../Spinner/Spinner';

import './Doodles.css';
import { Link } from 'react-router-dom';

function Doodles() {
    let url = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();

    const [doodleArray, setDoodleArray] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function getDoodleData(){
        setIsLoading(true)
        try{
            let result = await axios.get(`${url}/doodles`);
            setDoodleArray(result.data);
            setIsLoading(false);
        }
        catch(error){
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getDoodleData();
    }, []);

    function handleClick(id){
        navigate(`/doodles/${id}`);
    }


  return (
    <div className='container doodles-container'>
        <h2>Whimsical Scribbles: A Doodle Collection</h2>

            <blockquote className="blockquote text-center">
                <p className="mb-0">“Art should be something that liberates your soul.”</p>
                <br />
                <footer className="blockquote-footer">Keith Haring</footer>
            </blockquote>

            {
                isLoading ? (<Spinner />) : (
                    <div className='row row-gap-3'>{
                        doodleArray.map((item) => {
                            return(
                                    <div key={item.id} className='card col-6 rounded'>
                                        <img onClick={() => handleClick(item.id)} src={item.image_url} alt='doodle art' className='card-img-top doodle-image'/>
                                        <Link to={`/doodles/${item.id}`}><p className='doodle-title'>{item.title}</p></Link>
                                    </div>
                            )
                        })
                    }</div>
                )
            }
        
    </div>
  )
}

export default Doodles