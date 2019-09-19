import React from "react"

const Header = () => {
    return (
        <header className="employee employee-header">
            <section className="checkbox">
                <input type="checkbox" className="checkbox" />
            </section>
            <section className="avatar" />
            <section className="employee-name">
                <span>EMPLOYEES</span>
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
        </header>
    )
}

export default Header