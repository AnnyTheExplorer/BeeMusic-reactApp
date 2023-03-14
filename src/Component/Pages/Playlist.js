import React from "react";
import "./Playlist.css";
import { useDataLayerValue } from "../../DataLayer";

function Playlist({ spotify }) {
  return (
    <div className="playlist">
      <div className="songs">
        <div className="my-playlist">
          <h1>My Playlist</h1>
        </div>
        <div className="other">
          <p>Show All</p>
        </div>
      </div>
      <div className="playlist-items">
        <div className="order">
          <h3>#</h3>
          <div className="list">
            <p>01</p>
            <p>02</p>
            <p>03</p>
            <p>04</p>
            <p>05</p>
          </div>
        </div>
        <div className="title">
          <h3>TITLE</h3>
          <div className="list">
            <p>Priority</p>
            <p>Time is Ticking Out</p>
            <p>One Minute More</p>
            <p>SMA</p>
            <p>It's Plenty</p>
          </div>
        </div>
        <div className="song-artist">
          <h3>ARTIST</h3>
          <div className="list">
            <p>Moe Def</p>
            <p>The Cranberries</p>
            <p>Capital Cities</p>
            <p>Nasty C</p>
            <p>Burna Boy</p>
          </div>
        </div>
        <div className="time">
          <h3>TIME</h3>
          <div className="list">
            <p>1:25</p>
            <p>2:50</p>
            <p>2:23</p>
            <p>3:01</p>
            <p>2:55</p>
          </div>
        </div>
        <div className="song-album">
          <h3>ALBUM</h3>
          <div className="list">
            <p>The Ecstatic</p>
            <p>Wake Up And Smell t..</p>
            <p>In A Tidal Wave Of M..</p>
            <p>SMA</p>
            <p>Celebrate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Playlist;
