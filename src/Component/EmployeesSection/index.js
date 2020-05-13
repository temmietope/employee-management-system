import React from "react";
import SideBar from "../SideBar/index";
import EmployeesManagement from "../EmployeesManagement/index";
import "./EmployeesSection.css";

const EmployeesSection = () => {
  return (
    <div className="employees-section">
      <EmployeesManagement />
    </div>
  );
};

export default EmployeesSection;
