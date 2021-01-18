import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
      </ul>
      <ul>
        <a href="https://www.nasa.gov/" target="_blank">
          NASA
        </a>
      </ul>
    </div>
  );
};

export default NavBar;
