import React from "react";

const Header = () => {
  return (
    <header className="employee employee-header">
      <section className="checkbox header_">
        <input type="checkbox" className="checkbox" />
      </section>
      <section className="avatar header_" />
      <section className="employee-name header_">
        <span>EMPLOYEES</span>
      </section>
      <section className="employee-salary header_">
        <span>SALARY</span>
      </section>
      <section className="employee-status header_">
        <span>STATUS</span>
      </section>
      <section className="manage header_">
        <span>MANAGE</span>
      </section>
    </header>
  );
};

export default Header;
