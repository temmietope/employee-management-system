import React from "react"

const DeleteEmployee = ({ employee, deleteEmployee, onRequestClose }) => {
    return (
        <div className="delete-modal">
            <section>
                <h2>Are you sure you want to delete <span>{employee}</span> portfolio</h2>
                <div className="btn">
                    <button
                        onClick={() => {
                            deleteEmployee(employee)
                            onRequestClose()
                        }}
                    >Yes
            </button>
                    <button
                        onClick={() => {
                            onRequestClose()
                        }}
                    >Cancel
            </button>
                </div>
            </section>
        </div>
    )
}

export default DeleteEmployee