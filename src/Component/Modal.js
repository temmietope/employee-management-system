import React, { useState} from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ModalForm = ({ details, onRequestClose, changeDetails }) => {
  const [employeeDetails, setemployeeDetails] = useState({ ...details });
  const save = () => {
    setemployeeDetails(employeeDetails);
    changeDetails(employeeDetails, employeeDetails.id);
  };
  const updateDetails = e => {
    setemployeeDetails({ ...employeeDetails, [e.target.name]: e.target.value });
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
  );
};

export default ModalForm;
