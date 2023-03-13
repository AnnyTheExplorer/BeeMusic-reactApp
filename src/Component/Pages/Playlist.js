import React from "react";
import "./Playlist.css";
import { useDataLayerValue } from "../../DataLayer";

function Playlist({ spotify}) {

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
          
      </div>
    </div>
  );
}

export default Playlist;
