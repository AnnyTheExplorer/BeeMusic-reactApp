import React from "react";
import "./Homepage.css";
import LeftSidebar from "../Sidebars/LeftSidebar";
import Main from "./Main";
import RightSidebar from "../Sidebars/RightSidebar";
import Playcard from "../Pages/Playcard";

function Homepage({ spotify }) {
  return (
    <div className="homepage">
      <div className="homepage-body">
        <LeftSidebar />
        <Main spotify={spotify} />
        <RightSidebar />
      </div>
      <Playcard />
    </div>
  );
}

export default Homepage;
