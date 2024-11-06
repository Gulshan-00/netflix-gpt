import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestions from './GptMoviesSuggestions'

const GptSearch = () => {
  return (
    <div className='absolute top-[20%] text-white z-40 w-full flex justify-center items-center flex-col bg-black bg-opacity-80 '>
   <h1 className='font-extrabold text-red-500 text-xl pb-6'>GPT Movies Search</h1>
     <GptSearchBar/>
    <GptMoviesSuggestions/>
    </div>
  )
}

export default GptSearch