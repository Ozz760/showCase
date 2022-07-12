import React from "react";
import "./NavTabs.css";

function NavTabs() {
  return (
    <div className="nav">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
