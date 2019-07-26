import React from "react";
import {
  statusRand,
  jobtitleRand,
  salaryRand,
  timeRand,
  durationRand
} from "../utils/random";

const EmployeesInfo = ({ employees }) => {
  const renderEmployeesInfo = () => {
    return (
      <div className="employees-info">
        <div className="employee">
          <input type="checkbox" className="checkbox" />
          <span className="employee-name">{`EMPLOYEE ${
            employees.length
          }`}</span>
          <span>SALARY</span>
          <span>STATUS</span>
          <span>
            <i className="fas fa-pencil-alt" />{" "}
            <i className="far fa-trash-alt" />
          </span>
        </div>
        {employees.map((employee, index) => {
          return (
            <div key={index} className="employee">
              <input type="checkbox" name="employee" className="checkbox" />
              <span className="employee-name">
                <img src={employee.avatar_url} alt="avatar" />{" "}
                {`${employee.login}
              ${jobtitleRand()}`}
                {}
              </span>
              <span>{`${salaryRand()} GBP
              ${timeRand()}
              `}</span>
              <span>{`${statusRand()}
              ${durationRand()}`}</span>
              <span>
                <i className="fas fa-pencil-alt" />{" "}
                <i className="far fa-trash-alt" />
              </span>
            </div>
          );
        })}
      </div>
    );
  };
  return <>{employees.length > 0 && renderEmployeesInfo()}</>;
};

export default EmployeesInfo;
