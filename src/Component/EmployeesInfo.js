import React, { useState } from "react";
import { jobtitle, salary, status, time, duration } from "../utils/constants";
import ModalForm from "./Modal";
import Modal from "react-modal";

Modal.setAppElement("#root");

const EmployeesInfo = ({ employees, deleteEntry }) => {
  //states
  let allEmployeesPortfolio = [];
  const [portfolio, setPorfolio] = useState({});
  const [itemToDelete, setItemToDelete] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

  //functions

  //to open the modal for editing
  const openModal = e => {
    setModalIsOpen(true);
  };

  //to close the modal after editing
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const openDeleteModal = e => {
    setDeleteModalIsOpen(true);
  };

  //to edit/change employee details
  const changeDetails = (employee, id) => {
    const newEmployeePortfolio = [...allEmployeesPortfolio];
    newEmployeePortfolio.map(e => {
      if (e.id === id) {
        if (e.jobtitle !== employee.jobtitle) {
          jobtitle[id] = employee.jobtitle;
        }
        if (e.salary !== employee.salary) {
          salary[id] = employee.salary;
        }
        if (e.status !== employee.salary) {
          status[id] = employee.salary;
        }
        if (e.time !== employee.time) {
          time[id] = employee.time;
        }
        if (e.duration !== employee.duration) {
          duration[id] = employee.duration;
        }
      }
      return newEmployeePortfolio;
    });
  };

  const renderEmployeesInfo = () => {
    return (
      <div className="employees-info">
        <div className="employee employee-header">
          <section className="checkbox">
            <input type="checkbox" className="checkbox" />
          </section>
          <section className="avatar" />
          <section className="employee-name">
            <span>{`EMPLOYEE ${employees.length}`}</span>
          </section>
          <section className="employee-salary">
            <span>SALARY</span>
          </section>
          <section className="employee-status">
            <span>STATUS</span>
          </section>
          <section className="manage">
            <span>MANAGE</span>
          </section>
        </div>
        {employees.map((employee, index) => {
          const employeePortfolio = {
            id: index,
            name: employee.login,
            jobtitle: jobtitle[index],
            salary: salary[index],
            time: time[index],
            status: status[index],
            duration: duration[index]
          };
          allEmployeesPortfolio = [...allEmployeesPortfolio, employeePortfolio];

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
                  <span>{employeePortfolio.jobtitle}</span>
                </span>
              </section>
              <section className="employee-salary">
                <span>{employeePortfolio.salary} GBP</span>
                <br />
                <span>{employeePortfolio.time}</span>
              </section>
              <section className="employee-status">
                <span>{employeePortfolio.status}</span>
                <br />
                <span>{employeePortfolio.duration}</span>
              </section>
              <section className="manage">
                <button>
                  <i
                    className="fas fa-pencil-alt"
                    onClick={() => {
                      setPorfolio(employeePortfolio);
                      openModal();
                    }}
                  />
                </button>

                <button>
                  <i
                    className="far fa-trash-alt"
                    onClick={() => {
                      setItemToDelete(employee.login);
                      openDeleteModal(employee);
                    }}
                  />
                </button>
              </section>
            </div>
          );
        })}
        <Modal
          className="modal"
          isOpen={modalIsOpen}
          contentLabel="Example Modal"
        >
          <ModalForm
            details={portfolio}
            onRequestClose={closeModal}
            changeDetails={changeDetails}
          />
        </Modal>

        <Modal
          className="delete-modal"
          isOpen={deleteModalIsOpen}
          contentLabel="Example Modal"
        >
          <h3>
            Are you sure you want to delete <span>{itemToDelete}</span>{" "}
            Portfolio?
          </h3>
          <button
            onClick={() => {
              deleteEntry(itemToDelete);
              setDeleteModalIsOpen(false);
            }}
          >
            Yes
          </button>{" "}
          <button
            onClick={() => {
              setDeleteModalIsOpen(false);
            }}
          >
            No
          </button>
        </Modal>
      </div>
    );
  };

  return <>{employees.length > 0 && renderEmployeesInfo()}</>;
};

export default EmployeesInfo;
