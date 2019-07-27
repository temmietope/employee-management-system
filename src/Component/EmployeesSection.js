import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import EmployeesInfo from "./EmployeesInfo";

const EmployeesSection = () => {
  const [employees, setEmployee] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch(
        "https://api.github.com/search/users?q=location%3Anigeria&per_page=7"
      );
      const data = await res.json();
      return data.items;
    }
    fetchUsers().then(res => setEmployee(res));
  }, []);

  const deleteEntry = login => {
    const newEmployees = employees.filter(employee => employee.login !== login);
    setEmployee(newEmployees);
  };
  const renderEmployeeSection = () => {
    return (
      <div>
        {console.log(employees)}
        <section>
          <SideBar />
        </section>
        <section>
          <EmployeesInfo employees={employees} deleteEntry={deleteEntry} />
        </section>
      </div>
    );
  };
  const renderLoading = () => {
    return <div>Loading...</div>;
  };
  return (
    <>{employees.length > 0 ? renderEmployeeSection() : renderLoading()}</>
  );
};

export default EmployeesSection;
