import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const BookMovie = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [isMovieBooked, setMovieBooked] = useState(false);
    const [movie, setMovie] = useState({ genres: [] });

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleDobChange = (event) => {
        setDob(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMobileChange = (event) => {
        setMobile(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setMovieBooked(!false);
        setName('');
        setDob('');
        setEmail('');
        setMobile('');
    };

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
        <div className='container bg-primary-subtle p-4'>
            <div className='row'>
                <div className='col text-center'>
                    <p className=' fw-bold text-success' style={{ fontSize: 50 }}>{movie.name}</p>
                    <p className='fw-bold'>Show ID: {id}</p>
                    {movie.schedule && (
                        <div className='d-flex justify-content-center column-gap-4' style={{ fontSize: 20 }}>
                            <p>Time: {movie.schedule.time}</p>
                            <ul className='list-unstyled d-flex column-gap-2'>Days:
                                {movie.schedule.days.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <p className='fw-semibold' style={{ fontSize: 25 }} >Type: <span className='text-danger' >{movie.type}</span></p>
                    {isMovieBooked && <p className='h1 text-success-emphasis'>Booked Successfully!</p>}
                </div>
                <form className='col' onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label className='form-label'>Movie Id</label>
                        <input
                            type="text"
                            className='form-control'
                            // placeholder="enter name"
                            required
                            value={id}
                            disabled
                            // onChange={handleNameChange}
                        ></input>
                    </div>
                    <div className='mb-2'>
                        <label className='form-label'>Name</label>
                        <input
                            type="text"
                            className='form-control'
                            placeholder="enter name"
                            required
                            value={name}
                            onChange={handleNameChange}
                        ></input>
                    </div>

                    <div className='mb-2'>
                        <label className='form-label'>DOB</label>
                        <input
                            type="date"
                            className='form-control'
                            placeholder="enter dob"
                            value={dob}
                            onChange={handleDobChange}
                        ></input>
                    </div>
                    <div className='mb-2'>
                        <label className='form-label'>Email</label>
                        <input
                            type="email"
                            className='form-control'
                            placeholder="enter email"
                            required
                            value={email}
                            onChange={handleEmailChange}
                        ></input>
                    </div>
                    <div className='mb-2'>
                        <label className='form-label'>Mobile</label>
                        <input
                            type="tel"
                            className='form-control'
                            placeholder="enter contact number"
                            required
                            value={mobile}
                            onChange={handleMobileChange}
                        ></input>
                    </div>
                    <button type='submit' className='btn btn-primary w-100'>Book</button>

                </form>
            </div>
        </div>
    )
}

export default BookMovie
