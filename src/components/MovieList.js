import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  
  return (
    <div className='px-14'>
         
        <h1 className='font-extrabold text-2xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
        <div className='flex'>
        {movies.map(movie=><MovieCard key={movie.id} posterCard={movie}/>)}
        </div>
        </div>
        
    </div>
  );
};

export default MovieList;