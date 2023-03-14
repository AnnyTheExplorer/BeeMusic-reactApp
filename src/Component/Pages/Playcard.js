import React from "react";
import "./Playcard.css";
import {
  FaHeadphonesAlt,
  FaRegHeart,
  FaRegPlayCircle,
  FaStepBackward,
  FaStepForward,
  FaVolumeDown,
  FaVolumeUp,
} from "react-icons/fa";

function Playcard() {
  return (
    <div className="playcard">
      <div className="one">
        <div className="cover">
          now playing
        </div>
        <span className="details">
          <h3>You belong with me</h3>
          <p>Taylor Swift</p>
        </span>
      </div>
      <div className="two">
        <span className="icon">
          <FaRegHeart />
        </span>
        <span className="icon">
          <FaStepBackward />
        </span>
        <span className="icon">
          <FaRegPlayCircle fontSize="30px"/>
        </span>
        <span className="icon">
          <FaStepForward />
        </span>
        <span className="icon">
          <FaHeadphonesAlt />
        </span>
      </div>
      <div className="three">
        <span className="icon">
          <FaVolumeDown />
        </span>
        <span className="icon">
          <FaVolumeUp />
        </span>
        <span className='icon'>
        </span>
      </div>
    </div>
  );
}

export default Playcard;
