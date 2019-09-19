import React from "react";
import SubHeader from "../SubHeader/index"
import EmployeesSection from "../EmployeesSection/index"
import "./Home.css"

const Home = () => {
    return (
        <>
            <div className="overlay" />
            <div className="content">
                <SubHeader />
                <EmployeesSection />
            </div>
        </>
    )
}

export default Home;