import React, { useState, useEffect } from "react";
import { jobtitle, salary, status, time, duration } from "./utils/constants";
import Header from "./Header";
import EmployeeesList from "./EmployeesList";
import EditEmployee from "./EditEmployee";
import DeleteEmployee from "./DeleteEmployee";
import Modal from "react-modal";
import "./EmployeesManagement.css";

Modal.setAppElement("#root");

const EmployeesManagement = () => {
  //states
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState({});
  const [employeeToDelete, setEmployeeToDelete] = useState({});
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  //fetch data with useeffect
  useEffect(() => {
    async function fetchEmployees() {
      setIsLoading(true);
      const response = await fetch(
        "https://api.github.com/search/users?q=location%3Anigeria&per_page=7"
      );
      const json = await response.json();
      const data = await json.items;
      return data;
    }
    fetchEmployees().then((res) => {
      res.forEach((employee, index) => {
        employee.id = index;
        employee.name = employee.login;
        employee.jobtitle = jobtitle[index];
        employee.salary = salary[index];
        employee.time = time[index];
        employee.status = status[index];
        employee.duration = duration[index];
      });
      setEmployees(res);
      setIsLoading(false);
    });
  }, []);

  //functions

  //to delete employee
  const deleteEmployee = (login) => {
    const newEmployeesList = employees.filter(
      (employee) => employee.login !== login
    );
    setEmployees(newEmployeesList);
  };

  //to open modal for editting selected employee info
  const openEditModal = () => {
    setEditModalIsOpen(true);
  };

  //to open modal for deleting selected employee
  const openDeleteModal = () => {
    setDeleteModalIsOpen(true);
  };

  //to close modal after editting selected employee info
  const closeEditModal = () => {
    setEditModalIsOpen(false);
  };

  //to close delete modal
  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
  };

  //to set employee to edit to state
  const emitEmployeeToEdit = (employee) => {
    setEmployeeToEdit(employee);
  };

  //to set employee to delete to state
  const emitEmployeeToDelete = (employee) => {
    setEmployeeToDelete(employee);
  };

  //to edit selected employee and set new portfolio to state
  const editEmployee = (edittedEmployee, id) => {
    const allEmployees = [...employees];
    allEmployees.map((e) => {
      if (e.id === id) {
        if (e.jobtitle !== edittedEmployee.jobtitle) {
          e.jobtitle = edittedEmployee.jobtitle;
        }
        if (e.salary !== edittedEmployee.salary) {
          e.salary = edittedEmployee.salary;
        }
        if (e.status !== edittedEmployee.status) {
          e.status = edittedEmployee.status;
        }
        if (e.time !== edittedEmployee.time) {
          e.time = edittedEmployee.time;
        }
        if (e.duration !== edittedEmployee.duration) {
          e.duration = edittedEmployee.duration;
        }
      }
      return setEmployees(allEmployees);
    });
  };

  const customStyles = {
    content: {
      zIndex: 800,
      width: "100%",
      top: 0,
      left: 0,
      bottom: 0,
      height: "100%",
      padding: 0,
      overflow: "no-scroll",
    },
  };

  //render the list of employees
  const renderEmployeesList = () => {
    return (
      <div className="employees">
        <Header />
        <EmployeeesList
          isLoading={isLoading}
          employees={employees}
          emitEmployeeToDelete={emitEmployeeToDelete}
          emitEmployeeToEdit={emitEmployeeToEdit}
          openEditModal={openEditModal}
          openDeleteModal={openDeleteModal}
        />

        {/* edit modal */}
        <Modal style={customStyles} isOpen={editModalIsOpen}>
          <EditEmployee
            employee={employeeToEdit}
            onRequestClose={closeEditModal}
            editEmployee={editEmployee}
          />
        </Modal>

        {/* delete modal */}
        <Modal style={customStyles} isOpen={deleteModalIsOpen}>
          <DeleteEmployee
            employee={employeeToDelete}
            onRequestClose={closeDeleteModal}
            deleteEmployee={deleteEmployee}
          />
        </Modal>
      </div>
    );
  };

  return <div>{renderEmployeesList()}</div>;
};
export default EmployeesManagement;
