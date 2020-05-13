import React from "react";
import "./SideBar.css";

const SideBar = () => {
  return (
    <nav className="side-bar main-menu">
      <ul className="side-bar-wrapper">
        <li>
          <a href="#">
            <i className="far fa-check-circle" />
            <span className="all-employees-span nav-text">All Employees</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-atlassian" style={{ color: "forestgreen" }} />
            <span className="nav-text">Aroma Sport</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-dochub" style={{ color: "darkmagenta" }} />

            <span className="nav-text">DSV</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i
              className="fas fa-puzzle-piece"
              style={{ color: "midnightblue" }}
            />

            <span className="nav-text">Seafood Mall</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-otter" style={{ color: "olivedrab" }} />

            <span className="nav-text">FiveStar</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-hat-wizard" style={{ color: "saddlebrown" }} />

            <span className="nav-text">Zeto Bank</span>
          </a>
        </li>

        <li>
          <a href="#">
            <i className="fas fa-battery-full" style={{ color: "maroon" }} />

            <span className="nav-text">Full time</span>
          </a>
        </li>

        <li>
          <a href="#">
            <i className="fas fa-battery-half" style={{ color: "orangered" }} />

            <span className="nav-text">Part-time</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default SideBar;
