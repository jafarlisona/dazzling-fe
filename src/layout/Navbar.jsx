import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="navbar">
        <div className="logo" onClick={() => navigate("/")}>
          Dazzling Demo
        </div>
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
