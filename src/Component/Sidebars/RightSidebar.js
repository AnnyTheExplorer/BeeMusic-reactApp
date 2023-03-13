import React from 'react'
import './RightSidebar.css'

function RightSidebar() {
  return (
    <div className="rightsidebar">
      <div className="shortcuts">
        <h2>Shortcuts</h2>
      </div>
      <div className="lists">
        <div className="hits">
          <p className="chill">🌊Chill Hits</p>
          <p className="acoustic">🎸Acoustic</p>
          <p className="blues">🎹Piano Blues</p>
        </div>
        <div className="hip">
          <p className="hop">🎤Hip</p>
          <p className="pop">🎵Indie Pop</p>
          <p className="jazz">🎺Jazz</p>
        </div>
      </div>
      <div className='fav'>
        <h1 className='fav-artist'>Fav Artist</h1>
        <div className='artist-list'>
          
        </div>
      </div>
      
    </div>
  );
}

export default RightSidebar
