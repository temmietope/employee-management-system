import React from "react";

const DeleteEmployee = ({ employee, deleteEmployee, onRequestClose }) => {
  return (
    <div className="delete-modal">
      <section>
        <h2>
          Are you sure you want to delete <span className="emp_name">{employee}</span> portfolio
        </h2>
        <div className="btn">
          <button
            onClick={() => {
              deleteEmployee(employee);
              onRequestClose();
            }}
            className="delete-btn"
          >
            Yes
          </button>
          <button
            onClick={() => {
              onRequestClose();
            }}
            className="cancel-btn"
          >
            Cancel
          </button>
        </div>
      </section>
    </div>
  );
};

export default DeleteEmployee;
