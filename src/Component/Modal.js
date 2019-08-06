import React, { useState} from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ModalForm = ({ details, onRequestClose, changeDetails }) => {
  const [employeeDetails, setemployeeDetails] = useState({ ...details });
  const save = () => {
    setemployeeDetails(employeeDetails);
    changeDetails(employeeDetails, employeeDetails.id);
    onRequestClose()
  };
  const updateDetails = e => {
    setemployeeDetails({ ...employeeDetails, [e.target.name]: e.target.value });
  };
  const customStyles = {
    border: "1px solid rgb(85, 84, 84)",
    color: "white",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "500px",
    
  };
  return (
<div >
    <div style={customStyles}>
    <div style={{width: "500px"}}>
      <h2>Edit {details.name} Details</h2>
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
          <label>JobTitle</label>
          <input
            type="text"
            name="jobtitle"
            placeholder={details.jobtitle}
            onChange={e => {
              updateDetails(e);
            }}
          />
        </div>
        <div>
          <label>Salary</label>
          <input
            type="text"
            name="salary"
            placeholder={details.salary}
            onChange={e => {
              updateDetails(e);
            }}
          />{" "}
          GBP
        </div>
        <div>
          <label>Full-time/parttime</label>
          <input
            type="text"
            name="time"
            placeholder={details.time}
            onChange={e => {
              updateDetails(e);
            }}
          />
        </div>
        <div>
          <label>Status</label>
          <input
            type="text"
            name="status"
            placeholder={details.status}
            onChange={e => {
              updateDetails(e);
            }}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="text"
            name="duration"
            placeholder={details.duration}
            onChange={e => {
              updateDetails(e);
            }}
          />
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default ModalForm;
