import React from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <div className="main-header">
      <div className="nav-bar">
        <section className="nav-brand">
          <i className="far fa-check-circle" style={{ color: "red" }} />
          <span className="brand-name">internia</span>
        </section>
        <section className="nav-links">
          <span>
            <a href="/">Calender</a>
          </span>
          <span>
            <a href="/">Statistic</a>
          </span>
          <span className="active-link">
            <a href="/">Employee</a>
          </span>
          <span>
            <a href="/">Client</a>
          </span>
          <span>
            <a href="/">Equipment</a>
          </span>
        </section>
        <section className="icons">
          <span>
            <a href="/" title="Notification">
              <i
                className="far fa-bell"
                onClick={() => {
                  alert("No new notification");
                }}
              />
            </a>
          </span>
          <span>
            <Link to="/ContactUs" title="Contact Us">
              <i className="far fa-envelope" />
            </Link>
          </span>
          <span>
            <a href="/" title="Page">
              <i className="fas fa-user-tie" />
            </a>
          </span>
        </section>
      </div>
    </div>
  );
};

export default MainHeader;
