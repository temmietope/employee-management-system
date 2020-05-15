import React from "react";

const EmployeeesList = ({
  employees,
  isLoading,
  emitEmployeeToDelete,
  emitEmployeeToEdit,
  openEditModal,
  openDeleteModal,
}) => {
  const renderEmployeesList = () => {
    return (
      <>
        {employees.map((employee, index) => {
          return (
            <div key={index} className="employee employee-body">
              <section className="checkbox">
                <input type="checkbox" name="employee" className="checkbox" />
              </section>

              <section className="avatar">
                <img src={employee.avatar_url} alt="avatar" />
              </section>

              <section className="employee-name">
                <span>
                  <span> {employee.login}</span>
                  <br />
                  <span>{employee.jobtitle}</span>
                </span>
              </section>

              <section className="employee-salary">
                <span>{employee.salary} GBP</span>
                <br />
                <span>{employee.time}</span>
              </section>

              <section className="employee-status">
                <span>{employee.status}</span>
                <br />
                <span>{employee.duration}</span>
              </section>

              <section className="manage">
                <button>
                  <i
                    className="fas fa-pencil-alt"
                    onClick={() => {
                      openEditModal();
                      emitEmployeeToEdit(employee);
                    }}
                  />
                </button>

                <button>
                  <i
                    className="far fa-trash-alt"
                    onClick={() => {
                      openDeleteModal();
                      emitEmployeeToDelete(employee.login);
                    }}
                  />
                </button>
              </section>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="employees-list">
      {isLoading ? (
        <div className="loading">Loading Employees List...</div>
      ) : employees.length ? (
        renderEmployeesList()
      ) : (
        <div className="no-employee">No Employee</div>
      )}
    </div>
  );
};

export default EmployeeesList;
