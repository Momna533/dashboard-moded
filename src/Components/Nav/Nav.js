import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <div className="nav">
        <div className="nav_content">
          <Link className="nav_content_link" to="/">
            Home
          </Link>
          <Link className="nav_content_link" to="/FilterCategory">
            FilterCategory
          </Link>
        </div>
      </div>
    </>
  );
}
export default Nav;
