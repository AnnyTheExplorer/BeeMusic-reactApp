import React from "react";
import "./RightSidebar.css";
import { FaUserCircle } from "react-icons/fa";
import Images from "../Images/lady.jpeg";

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
      <div className="fav">
        <h1 className="fav-artist">Fav Artist</h1>
        <div className="artist-list">
          <div className="artist1">
            <div className="icon">
              <FaUserCircle />
            </div>
            <div className="detail">
              <h4>Taylor Swift</h4>
              <p>150 songs in library</p>
            </div>
          </div>
          <div className="artist2">
            <div className="icon">
              <FaUserCircle />
            </div>
            <div className="detail">
              <h4>Burna Boy</h4>
              <p>124 songs in library</p>
            </div>
          </div>
          <div className="artist3">
            <div className="icon">
              <FaUserCircle />
            </div>
            <div className="detail">
              <h4>Justin Bieber</h4>
              <p>100 songs in library</p>
            </div>
          </div>
          <div className="artist4">
            <div className="icon">
              <FaUserCircle />
            </div>
            <div className="detail">
              <h4>Rihanna</h4>
              <p>54 songs in library</p>
            </div>
          </div>
        </div>
        <div className="img-container">
          <div className="right-img">
            <img src={Images} alt="lady" />
          </div>
          <div className="img-text">
            <h4>Gangnam Style</h4>
            <p>Play next</p>
          </div>
        </div>
      </div>   
    </div>
  );
}

export default RightSidebar;
