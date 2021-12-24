import React, {useState, useEffect} from 'react'
import axios from 'axios';


function SWMovies() {

    const [number, setNumber] = useState(1);
    const [movie,setMovie] = useState('');


    const handleChange=(evt) => {
        setNumber(evt.target.value);
    }

    useEffect(() => {
        async function getData() {
            let res= await axios.get(`https://swapi.dev/api/films/${number}/`);
            setMovie(res.data)
        }
        getData();
        
    },[number])

    return(
        <div>
            <h1>This is a Star Wars API app to understand useEffect</h1>
            <h2>Select a number below:</h2>
            
            <select value={number} onChange={handleChange}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
            </select>

            <h2>The title of movie is: {movie.title}  </h2>
            <p>{movie.opening_crawl} </p>
        </div>
    )
}


export default SWMovies;