import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">Dazzling Demo</div>
        <div className="pages">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/addPage">Add Page</NavLink>
          <Link to="#">Gallery</Link>
          <Link to="#">About</Link>
          <Link to="#">Languages</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
