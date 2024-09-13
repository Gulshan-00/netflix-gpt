import React from 'react'
import { TMDB_POSTER_URL } from '../utils/constants'

const MovieCard = ({posterCard}) => {
  return (
    <div className='w-[180px] cursor-pointer relative mr-4'>
         <img className='rounded-md ' src={TMDB_POSTER_URL + posterCard?.poster_path} alt="movie_card"/>
    </div>
  );
};

export default MovieCard; 