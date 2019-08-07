import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import ContactUs from "./Component/ContactUs";
import Home from "./Component/Home";

const App = () => {
  return (
    <div className="app">
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Route path="/ContactUs" component={ContactUs} />
        </>
      </Router>
    </div>
  );
};

export default App;
