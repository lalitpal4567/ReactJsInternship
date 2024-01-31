import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.tvmaze.com/search/shows?q=all");
                const movieList = response.data.map(item => item.show);
                setMovies(movieList);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='d-flex flex-wrap column-gap-4 justify-content-center row-gap-5'>
            {
                movies.map((item) =>{
                    return <Movie key={item.id} movie={item}/>
                })
            }
        </div>
    )
}

export default MovieList
