import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import * as routes from "./Component/constants/routes"
import Home from "./Component/Home/index";
import Navigation from "./Component/Navigation";
import EmployeesManagement from "./Component/EmployeesManagement/index"

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Route exact path={routes.home} component={Home} />
      <Route path={routes.employee} component={EmployeesManagement} />
    </div>
  );
};

export default App;