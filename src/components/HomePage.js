import React from 'react'
import MovieList from './MovieList'

const HomePage = () => {
  return (
    <div className='container bg-light py-5 rounded-4'>
      <p className='fw-bold text-center' style={{fontSize: 70, color: "purple"}}>Movie Booking</p>
      <MovieList/>
    </div>
  )
}

export default HomePage
