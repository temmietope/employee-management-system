import React, { useState } from "react";
import { jobtitle, salary, status, time, duration } from "../utils/constants";
import ModalForm from "./Modal";
import Modal from "react-modal";

Modal.setAppElement("#root");

const EmployeesInfo = ({ employees, deleteEntry }) => {
  //states
  let [allEmployeesPortfolio, setAllemployeesPortfolio] = useState([]);
  const [portfolio, setPorfolio] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //functions
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  //renderFunction
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
          <span>MANAGE</span>
        </div>
        {employees.map((employee, index) => {
          const employeePortfolio = {
            name:employee.login,
            jobtitle: jobtitle[index],
            salary: salary[index],
            time: time[index],
            status: status[index],
            duration: duration[index]
          };
          allEmployeesPortfolio = [...allEmployeesPortfolio, employeePortfolio];
          return (
            <div key={index} className="employee">
              <input type="checkbox" name="employee" className="checkbox" />
              <span className="employee-name">
                <img src={employee.avatar_url} alt="avatar" />
                {`${employee.login}
              ${employeePortfolio.jobtitle}`}
              </span>
              <span>{`${employeePortfolio.salary} GBP
              ${employeePortfolio.time}
              `}</span>
              <span>{`${employeePortfolio.status}
              ${employeePortfolio.duration}`}</span>
              <span>
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
              </span>
            </div>
          );
        })}
        <Modal
          className="modal"
          isOpen={modalIsOpen}
          contentLabel="Example Modal"
        >
          
          <ModalForm details={portfolio} 
          onRequestClose={closeModal}/>
        </Modal>
      </div>
    );
  };

  return <>{employees.length > 0 && renderEmployeesInfo()}</>;
};

export default EmployeesInfo;
