import React from "react";
import SubHeader from "../SubHeader/index";
import EmployeesSection from "../EmployeesSection/index";
import "./Home.css";
import SideBar from "../SideBar";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="content">
        <SideBar />
        <div className="area">
          <SubHeader />
          <EmployeesSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
