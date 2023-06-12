import React from "react";
import "./TopBar.css";
import Theme from "../../Theme";
import { Link } from "react-router-dom";
function TopBar() {
  return (
    <>
      <div className="topbar">
        <div className="topbar_content">
          <Theme />
        </div>
      </div>
    </>
  );
}
export default TopBar;
