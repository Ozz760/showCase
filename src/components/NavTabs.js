import React from "react";
import "./NavTabs.css";

function NavTabs() {
  return (
    <div className="nav">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            About Me
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Projects
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
