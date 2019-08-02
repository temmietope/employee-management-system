import React, { useState } from "react";
import { jobtitle, salary, status, time, duration } from "../utils/constants";
import ModalForm from "./Modal";
import Modal from "react-modal";

Modal.setAppElement("#root");

const EmployeesInfo = ({ employees, deleteEntry }) => {
  //states
  let allEmployeesPortfolio = [];
  const [portfolio, setPorfolio] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //functions
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
  const checkAllBoxes=()=>{

  }

  const renderEmployeesInfo = () => {
    return (
      <div className="employees-info">
        <div className="employee employee-header">
          <section className="checkbox">
            <input type="checkbox" onChange={()=>{
              checkAllBoxes()
            }} />
          </section>
          <section className="avatar" />
          <section className="employee-name">
            <h4>{`EMPLOYEE ${employees.length}`}</h4>
          </section>
          <section className="employee-salary">
            <h4>SALARY</h4>
          </section>
          <section className="employee-status">
            <h4>STATUS</h4>
          </section>
          <section className="manage">
            <h4>MANAGE</h4>
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
                <input type="checkbox" name="employee" />
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
                      deleteEntry(employee.login);
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
      </div>
    );
  };

  return <>{employees.length > 0 && renderEmployeesInfo()}</>;
};

export default EmployeesInfo;
