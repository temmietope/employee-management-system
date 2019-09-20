import React from "react"
import "./Navigation.css"

const Navigation = () => {
  return (
    <div className="navigation">
      <nav>
        <section className="nav-brand">
          <i className="far fa-check-circle" />
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
            <a href="/" title="Contact Us">
              <i className="far fa-envelope" />
            </a>
          </span>
          <span>
            <a href="/" title="Page">
              <i className="fas fa-user-tie" />
            </a>
          </span>
        </section>
      </nav>
    </div>
  )
}
export default Navigation