import React, { useEffect } from "react";

const EmployeesInfo = ({ employees }) => {
  useEffect(() => {
    console.log(employees);
  });
  return (
    <div>
      <input type="checkbox" />
      <span>EMPLOYEE</span>
      <span>SALARY</span>
      <span>STATUS</span>
      <span>MANAGE</span>

      {employees.map((employee, index) => {
        return (
          <div key={index}>
            {console.log(employee.login)}
            <input type="checkbox" />
            <span>{employee.login}</span>
            <span>SALARY</span>
            <span>STATUS</span>
            <span>MANAGE</span>
          </div>
        );
      })}
    </div>
  );
};

export default EmployeesInfo;
