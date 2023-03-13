import React from 'react'
import './Search.css'
import { FaArrowLeft, FaArrowRight, FaSearch } from 'react-icons/fa'

function Search() {
  return (
    <div className='search'>
      <div className='search-wrapper'>
        <div className='search-arrow'>
          <span className='arrow'>
            <FaArrowLeft />
          </span>
          <span className='arrow'>
            <FaArrowRight />
          </span>
        </div>
        <div className='search-input'>
          <FaSearch id='search-icon' />
          <input type='text' placeholder='search for artist, song, and...' />
        </div>
      </div>
    </div>
  )
}

export default Search
