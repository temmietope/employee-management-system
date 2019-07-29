import React, { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ModalForm = ({ details, onRequestClose }) => {
  const [employee, setEmployee] = useState({
    name: `${details.name}`,
    jobtitle: `${details.jobtitle}`,
    salary: `${details.salary}`,
    status: `${details.status}`,
    time: `${details.time}`,
    duration: `${details.duration}`
  });
  useEffect(() => {
    console.log(details);
  });
  const save = () => {
    console.log(employee);
    setEmployee(employee);
  };
  const updateInfo = e => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
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
  return (
    <div style={customStyles}>
      <h2>Edit Employee Info</h2>
      <button onClick={onRequestClose}>Close</button>
      <button
        onClick={() => {
          save();
        }}
      >
        Save
      </button>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={details.name}
            onChange={e => {
              updateInfo(e);
            }}
          />
        </div>
        <div>
          <label>JobTitle</label>
          <input
            type="text"
            name="jobtitle"
            value={details.jobtitle}
            onChange={e => {
              updateInfo(e);
            }}
          />
        </div>
        <div>
          <label>Salary</label>
          <input
            type="text"
            name="salary"
            value={details.salary}
            onChange={e => {
              updateInfo(e);
            }}
          />{" "}
          GBP
        </div>
        <div>
          <label>Full-time/parttime</label>
          <input
            type="text"
            name="time"
            value={details.time}
            onChange={e => {
              updateInfo(e);
            }}
          />
        </div>
        <div>
          <label>Status</label>
          <input
            type="text"
            name="status"
            value={details.status}
            onChange={e => {
              updateInfo(e);
            }}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="text"
            name="duration"
            value={details.duration}
            onChange={e => {
              updateInfo(e);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default ModalForm;
