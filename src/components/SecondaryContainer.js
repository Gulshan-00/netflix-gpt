import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const moviesStore=useSelector(store=>store?.movies)
  
  return (
        
    //this code wasted my so much time here

      moviesStore.nowPlayingMovies && moviesStore.popularMovies && (<div className='bg-black bg-opacity-90'>  
      <div className='-mt-[300px] relative z-30'>          
      <MovieList title={"Now Playing"} movies={moviesStore?.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={moviesStore?.popularMovies}/>
      <MovieList title={"Trending"} movies={moviesStore?.nowPlayingMovies}/>
      <MovieList title={"Upcoming Movies"} movies={moviesStore?.nowPlayingMovies}/>
      <MovieList title={"Horror"} movies={moviesStore?.nowPlayingMovies}/>
      </div>
    </div>)
  );
};

export default SecondaryContainer;