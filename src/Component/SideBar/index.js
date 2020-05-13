import React from "react";

const SideBar = () => {
  return (
    <nav className="side-bar main-menu">
      <ul className="side-bar-wrapper">
        <li>
          <a href="#">
            <i className="far fa-check-circle fa-icon" />
            <span className="all-employees-span nav-text">All Employees</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i
              className="fab fa-atlassian fa-icon"
              style={{ color: "forestgreen" }}
            />
            <span className="nav-text">Aroma Sport</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i
              className="fab fa-dochub fa-icon"
              style={{ color: "darkmagenta" }}
            />

            <span className="nav-text">DSV</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i
              className="fas fa-puzzle-piece fa-icon"
              style={{ color: "midnightblue" }}
            />

            <span className="nav-text">Seafood Mall</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i
              className="fas fa-otter fa-icon"
              style={{ color: "olivedrab" }}
            />

            <span className="nav-text">FiveStar</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i
              className="fas fa-hat-wizard fa-icon"
              style={{ color: "saddlebrown" }}
            />

            <span className="nav-text">Zeto Bank</span>
          </a>
        </li>

        <li>
          <a href="#">
            <i
              className="fas fa-battery-full fa-icon"
              style={{ color: "maroon" }}
            />

            <span className="nav-text">Full time</span>
          </a>
        </li>

        <li>
          <a href="#">
            <i
              className="fas fa-battery-half fa-icon"
              style={{ color: "orangered" }}
            />

            <span className="nav-text">Part-time</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default SideBar;
