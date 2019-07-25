import React from "react";


const MainHeader = () => {
  return (
    <div className="main-header">
      <div className="nav-bar">
        <section className="nav-brand">Internia</section>
        <section className="nav-links">
          <span>
            <a href="/">Calender</a>
          </span>
          <span>
            <a href="/">Statistic</a>
          </span>
          <span>
            <a href="/">Employee</a>
          </span>
          <span>
            <a href="/">Equipment</a>
          </span>
        </section>
        <section className="icons">
          <span>
            <a href="/"><i className="far fa-bell"></i></a>
          </span>
          <span>
            <a href="/"><i className="far fa-envelope"></i></a>
          </span>
          <span>
            <a href="/"><i className="fas fa-user-tie"></i></a>
          </span>
        </section>
      </div>
    </div>
  );
};

export default MainHeader;
