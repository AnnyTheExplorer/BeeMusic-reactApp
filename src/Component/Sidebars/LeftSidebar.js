import React from "react";
import "./LeftSidebar.css";
import { FaFolderPlus, FaHome, FaRegCalendar, FaRegMap, FaRegUser, FaEnvelope, FaHeart, FaUserFriends, FaStar } from "react-icons/fa";

function LeftSidebar() {
  return (
    <div className="leftsidebar">
      <div className="logo">
        Bee<span className="music">Music</span>
      </div>
      <div className="section1">
        <div className="user">
          <div className="home-icon">
            <span className="icon">
              <FaHome />
            </span>
            <span className="">Home</span>
          </div>
          <div className="trend-icon">
            <span className="icon">
              <FaRegMap />
            </span>
            <span className="trend">Trends</span>
          </div>
          <div className="feed-icon">
            <span className="icon">
              <FaRegUser />
            </span>
            <span className="feed">Feed</span>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="promotion">
          <h3>Discover</h3>
          <div className="new-icon">
            <span className="icon">
              <FaFolderPlus />
            </span>
            <span className="new">New and Notable</span>
          </div>
          <div className="release-icon">
            <span className="icon">
              <FaRegCalendar />
            </span>
            <span className="release">Release Calendar</span>
          </div>
          <div className="event-icon">
            <span className="icon">
              <FaEnvelope />
            </span>
            <span className="event">Events</span>
          </div>
        </div>
      </div>
      <div className="setion3">
        <div className="collection">
          <h3>Your Collection</h3>
          <div className="song-icon">
            <span className="icon">
              <FaHeart />
            </span>
            <span className="song">Favorite Songs</span>
          </div>
          <div className="artist-icon">
            <span className="icon">
              <FaUserFriends />
            </span>
            <span className="artist">Artist</span>
          </div>
          <div className="album-icon">
            <span className="icon">
              <FaStar />
            </span>
            <span className="album">Albums</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
