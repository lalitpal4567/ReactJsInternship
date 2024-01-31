import React from 'react'
import { Link } from 'react-router-dom'

const Movie = ({ movie }) => {
    return (
        <div className='border border-2 border-black rounded-4 overflow-hidden pb-3' style={{backgroundColor: "black"}}>
            <div className='' style={{width: 250}}>
                {movie.image && movie.image.original ? (
                    <img className=' object-fit-contain w-100 ' src={movie.image.original} alt={movie.name} />
                ) : (
                    <div className="text-center">No Image Available</div>
                )}
            </div>
            <section className='text-center'>
                <p className='p-2 bg-warning m-0 text-white'>{movie.name}</p>
                <p className='bg-black text-white py-2 m-0'>{movie.genres[0]}</p>
            </section>
            <Link to={`details/${movie.id}`} className='btn w-100 btn-success'>More Details</Link>
        </div>
    )
}

export default Movie