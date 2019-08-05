import React, { useState } from "react";

const SideBar = () => {
  const [lastClicked, setLastClicked] = useState(false);

  const resetBackgroundColor = () => {
    const list = document.querySelectorAll("li");
    list.forEach(list => {
      list.style.backgroundColor = "inherit";
    });
  };
  const onClick = e => {
    if (!lastClicked) {
      e.target.style.backgroundColor = "rgba(189, 169, 169, 0.856)";
      setLastClicked(true);
    }
    if (lastClicked) {
      resetBackgroundColor();
      e.target.style.backgroundColor = "rgba(189, 169, 169, 0.856)";
    }
  };

  return (
    <div className="side-bar">
      <div>
        <span>
          {" "}
          <i
            className="far fa-check-circle"
            style={{ color: "red", fontSize: "33px" }}
          />
          All Employees
        </span>
      </div>
      <div>
        <h4>Project</h4>
        <ul>
          <li
            onClick={e => {
              onClick(e);
            }}
          >
            <i className="fab fa-atlassian" style={{ color: "forestgreen" }} />
            <span>Aroma Sport</span>
          </li>
          <li
            onClick={e => {
              onClick(e);
            }}
          >
            <i className="fab fa-dochub" style={{ color: "darkmagenta" }} />
            <span>DSV</span>
          </li>
          <li
            onClick={e => {
              onClick(e);
            }}
          >
            <i
              className="fas fa-puzzle-piece"
              style={{ color: "midnightblue" }}
            />
            <span>SeaFood Mall</span>
          </li>
          <li
            onClick={e => {
              onClick(e);
            }}
          >
            <i className="fas fa-otter" style={{ color: "olivedrab" }} />
            <span>FiveStar</span>
          </li>
          <li
            onClick={e => {
              onClick(e);
            }}
          >
            <i className="fas fa-hat-wizard" style={{ color: "saddlebrown" }} />
            <span>Zeto Bank</span>
          </li>
        </ul>
      </div>
      <div>
        <h4>Status</h4>
        <ul>
          <li
            onClick={e => {
              onClick(e);
            }}
          >
            <i className="fas fa-battery-full" style={{ color: "maroon" }} />
            <span>Full-time</span>
          </li>
          <li
            onClick={e => {
              onClick(e);
            }}
          >
            <i className="fas fa-battery-half" style={{ color: "orangered" }} />
            <span>Part-time</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
