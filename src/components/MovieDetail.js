import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const MovieDetail = () => {
    const [movie, setMovie] = useState({genres: []});
    const { id } = useParams();
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
                setMovie(response.data);
            } catch (error) {
                console.error("not found", error);
            }
        }
        fetchMovie();
    }, [id])
    return (
        <div className='container bg-warning rounded-2'>
            <div className='row p-4 flex-md-row text-center text-sm-start'>
                <div className='col-12 col-sm-4'>
                    {movie.image && movie.image.original ? (
                        <img className=' object-fit-contain w-100 ' src={movie.image.original} alt={movie.name} />
                    ) : (
                        <div className="text-center">No Image Available</div>
                    )}
                </div>
                <div className='col p-3'>
                    <p className=' fw-bold' style={{ fontSize: 30 }}>{movie.name}</p>
                    <p><b>Language :</b>{movie.language}</p>
                    <ul className='d-flex list-unstyled column-gap-2 justify-content-center justify-content-sm-start'>
                        <b>Genres: </b>
                        {console.log(movie)}
                        {movie.genres.map((item) =>{
                            return <li>{item}</li>
                        })}
                    </ul>
                    {movie.rating && movie.rating.average !== null ? (
                        <p><b>Rating:</b> {movie.rating.average}</p>
                    ) : (
                        <p><b>Rating:</b> Not Available</p>
                    )}
                    <p><b>{movie.name}</b>{movie.summary}</p>
                    <Link className='btn btn-danger w-100' to={`/bookmovie/${movie.id}`} >Book</Link>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail
