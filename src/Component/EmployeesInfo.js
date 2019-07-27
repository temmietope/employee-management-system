import React, { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const EmployeesInfo = ({ employees, deleteEntry }) => {
  const [staff, setStaff] = useState({
    jobtitle: [
      "Software Engineer",
      "Software Engineer",
      "Project Manager",
      "Support Manager",
      "Dev Ops",
      "Content Developer",
      "Information Analyst"
    ],
    salary: ["8,000", "7,500", "3,200", "5,000", "4,000", "2,500", "4,000"],
    status: [
      "worker",
      "worker",
      "worker",
      "test period",
      "test period",
      "worker"
    ],
    duration: [
      "1 year",
      "2 years",
      "1.5 years",
      "7 months",
      "3months",
      "1 year",
      "2 years"
    ],
    time: [
      "full-time",
      "full-time",
      "part-time",
      "part-time",
      "full-time",
      "full-time",
      "part-time"
    ]
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    console.log(staff);
  });

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
          return (
            <div key={index} className="employee">
              <input type="checkbox" name="employee" className="checkbox" />
              <span className="employee-name">
                <img src={employee.avatar_url} alt="avatar" />
                {`${employee.login}
              ${staff.jobtitle[index]}`}
              </span>
              <span>{`${staff.salary[index]} GBP
              ${staff.time[index]}
              `}</span>
              <span>{`${staff.status[index]}
              ${staff.duration[index]}`}</span>
              <span>
                <button>
                  <i
                    className="fas fa-pencil-alt"
                    onClick={() => {
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
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>Edit Employee Info</h2>
          <button onClick={closeModal}>Save</button>
          <form>
            <div>
              <label>Name</label>
              <input type="text" name="login" />
            </div>
            <div>
              <label>JobTitle</label>
              <input type="text" name="jobtitle" />
            </div>
            <div>
              <label>Salary</label>
              <input type="text" name="salary" /> GBP
            </div>
            <div>
              <label>Full-time/parttime</label>
              <input type="text" name="time" />
            </div>
            <div>
              <label>Status</label>
              <input type="text" name="status" />
            </div>
            <div>
              <label>Duration</label>
              <input type="text" name="duration" />
            </div>

            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    );
  };

  return <>{employees.length > 0 && renderEmployeesInfo()}</>;
};

export default EmployeesInfo;
