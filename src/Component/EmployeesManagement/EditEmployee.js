import React, { useState, useEffect } from "react"
import Modal from "react-modal";

Modal.setAppElement("#root");

const EditEmployee = ({ employee, onRequestClose, editEmployee }) => {
    const [employeePortfolio, setEmployeePortfolio] = useState({})
    useEffect(() => {
        const employeeToEdit = { ...employee }
        setEmployeePortfolio(employeeToEdit)
    }, [employee])
    const updateEmployee = (e) => {
        setEmployeePortfolio({ ...employee, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        editEmployee(employeePortfolio, employeePortfolio.id)
        onRequestClose()
    }
    return (
        <div className="edit-modal">
            <h2>{employee.login}</h2>
            <form onSubmit={(e) => { onSubmit(e) }}>

                <label>
                    <span>Jobtitle</span>
                    <input type="text" name="jobtitle" placeholder={employeePortfolio.jobtitle} onChange={(e) => { updateEmployee(e) }} />
                </label>

                <label>
                    <span>Salary</span>
                    <input type="text" name="salary" placeholder={employeePortfolio.salary} onChange={(e) => { updateEmployee(e) }} />
                </label>

                <label>
                    <span>Time</span>
                    <select name="time" onChange={(e) => { updateEmployee(e) }}>
                        <option value="full-time">full-time</option>
                        <option value="part-time">part-time</option>
                    </select>
                </label>

                <label>
                    <span>Status</span>
                    <select name="status" onChange={(e) => { updateEmployee(e) }}>
                        <option value="worker">Worker</option>
                        <option value="test period">Test period</option>
                    </select>
                </label>

                <label>
                    <span>Duration</span>
                    <input type="text" name="duration" placeholder={employeePortfolio.duration} onChange={(e) => { updateEmployee(e) }} />
                </label>
                <div className="btn">
                    <button onClick={() => { onRequestClose() }}>Cancel</button>
                    <button type="submit">Save</button>
                </div>
            </form>

        </div>
    )
}

export default EditEmployee