import React from "react";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div>
        <span>All Employees</span>
      </div>
      <div>
        <h4>Project</h4>
        <ul>
          <li>
            <i className="fab fa-atlassian" />
            Aroma Sport
          </li>
          <li>
            <i className="fab fa-dochub" />
            DSV
          </li>
          <li>
            <i className="fas fa-puzzle-piece" />
            SeaFood Mall
          </li>
          <li>
            <i className="fas fa-otter" />
            FiveStar
          </li>
          <li>
            <i className="fas fa-hat-wizard" />
            Zeto Bank
          </li>
        </ul>
      </div>
      <div>
        <h4>Status</h4>
        <ul>
          <li>
            <i className="fas fa-battery-full" />
            Full-time
          </li>
          <li>
            <i className="fas fa-battery-half" />
            Part-time
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
