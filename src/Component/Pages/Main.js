import React from "react";
import "./Main.css";
import Search from "./Search";
import LeftSidebar from "../Sidebars/LeftSidebar";
import { FaAngleRight } from "react-icons/fa";
import Playlist from "./Playlist";

function Main({ spotify }) {
  return (
    <div className="main">
      <Search spotify={spotify} />
      <div className="container">
        <p className="hot">What's hot🌟</p>
        <div className="trending">
          <div className="trend">
            <h1>Trending</h1>
          </div>
          <div className="more">
            <span>More</span>
            <FaAngleRight />
          </div>
        </div>
        <div className="trending-info">
          <p className="artist">Artist</p>
          <h1>
            On Top <br /> Of The World
          </h1>
          <div className="buttons">
            <button>PLAY</button>
            <button>FOLLOW</button>
          </div>
        </div>
      </div>
      <Playlist />
    </div>
  );
}

export default Main;
