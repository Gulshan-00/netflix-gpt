import React from 'react'
import lang from '../utils/languageConstants'

const GptSearchBar = () => {
  return (
    <div className='flex'>
        <input className='text-2xl p-4 px-20 rounded-tl-md rounded-bl-md text-purple-400' type="text" name="gptname" id="" placeholder={lang.hindi.gptSearchPlaceholder} />
        <button className='p-5 px-7 bg-purple-500 text-white rounded-tr-md rounded-br-md'>{lang.hindi.search}</button>
    </div>
  )
}

export default GptSearchBar