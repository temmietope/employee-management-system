import React, { useEffect } from "react";
// import {rand()} from "../utils/random"

const EmployeesInfo = ({ employees }) => {
  useEffect(() => {
    console.log(employees);
  });
  const rand=()=>{
   return Math.floor(Math.random() * 9)
  }
  const rand2=()=>{
    return Math.floor(Math.random() * 3)
   }
  const rand3=()=>{
    return Math.floor(Math.random() * 1)
   }
  // const rand = Math.round(1 + Math.random() * 10);
  const salary = ["3,200", "5,000", "8,000", "7,500", "4,000", "2,000", "5,500", "3,800", "1,000", "4,000"];
  const jobtitle=["Software Engineer", "Project Manager", "Support Manager", "Dev Ops"]
  const status=["test period", "worker"]

  return (
    <div>
      <input type="checkbox" />
      <span>EMPLOYEE</span>
      <span>JOBTITLE</span>
      <span>SALARY</span>
      <span>STATUS</span>
      <span>MANAGE</span>

      {employees.map((employee, index) => {
        return (
          <div key={index}>
            {console.log(employee.login, employee.avatar_url, rand())}
            <input type="checkbox" name="employee" />
            <img src={employee.avatar_url} alt="avatar" />
            <span>{employee.login}</span>
            <span>{jobtitle[rand2()]}</span>
            <span>{`${salary[rand()]} GBP`}</span>
            <span>{status[rand3()]}</span>
            <span>MANAGE</span>
          </div>
        );
      })}
    </div>
  );
};

export default EmployeesInfo;
