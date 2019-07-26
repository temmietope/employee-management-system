import React from "react";
import "./App.css";
import MainHeader from "./Component/MainHeader";
import SubHeader from "./Component/SubHeader";
import Employees from "./Component/EmployeesSection";

const App = () => {
  
  return (
    <div className="app">
      <MainHeader />
      <div className="content">
        <SubHeader />
        <Employees />
      </div>
    </div>
  );
};

export default App;
