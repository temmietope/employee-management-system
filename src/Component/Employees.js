import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import EmployeesInfo from "./EmployeesInfo";

const Employees = () => {
  const [employees, setEmployee] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch(
        "https://api.github.com/search/users?q=location%3Anigeria&per_page=10"
      );
      const data = await res.json();
      return data.items;
    }
    fetchUsers().then(res => setEmployee(res));
  }, []);
  return (
    <div>
      {console.log(employees)}
      <section>
        <SideBar />
      </section>
      <section>
        <EmployeesInfo employees={employees} />
      </section>
    </div>
  );
};

export default Employees;
