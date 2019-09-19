import React from "react";
import SideBar from "../SideBar/index";
import EmployeesManagement from "../EmployeesManagement/index";
import "./EmployeesSection.css"

const EmployeesSection = () => {
  const renderEmployeeSection = () => {
    return (
      <div className="employees-section">
        <section>
          <SideBar />
        </section>
        <section>
          <EmployeesManagement />
        </section>
      </div>
    );
  };
  return (
    <>
      {renderEmployeeSection()}
    </>
  );
};

export default EmployeesSection;
