import React from "react";
import MainHeader from "./MainHeader"
import SubHeader from "./SubHeader";
import Employees from "./EmployeesSection";


const Home = ()=>{
    return(
        <>
        <MainHeader />
      <div className="overlay" />
      <div className="content">
        <SubHeader />
        <Employees />
      </div>
        </>
    )
}

export default Home;