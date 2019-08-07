import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ModalForm = ({ details, onRequestClose, changeDetails }) => {
  const [employeeDetails, setemployeeDetails] = useState({ ...details });
  const save = () => {
    setemployeeDetails(employeeDetails);
    changeDetails(employeeDetails, employeeDetails.id);
    onRequestClose();
  };
  const updateDetails = e => {
    setemployeeDetails({ ...employeeDetails, [e.target.name]: e.target.value });
  };
  const customStyles = {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "600px"
  };
  return (
    <div>
      <div style={customStyles}>
        <div style={{ width: "500px" }} className="edit-modal">
          <h2>
            Edit{" "}
            <span style={{ fontSize: "1.2em", textTransform: "uppercase" }}>
              {details.name}
            </span>{" "}
            Details
          </h2>
          <button onClick={onRequestClose}>Close</button>
          <button
            onClick={() => {
              save();
            }}
          >
            Save
          </button>
          <form>
            <div className="label">
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
            <div className="label">
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
            <div className="label">
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
            <div className="label">
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
            <div className="label">
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
