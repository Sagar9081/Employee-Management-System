import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Our all component files
import ListEmployee from "./ListEmployee/ListEmployee";
import EditEmployee from "./EditEmployee/EditEmployee";
import ReadPage from "./ReadEmployee/ReadPage";
import EmployeeForm from "./AddEmployee/EmployeeForm";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ListEmployee} />
          <Route path="/list" component={ListEmployee} />
          <Route path="/addemployee" component={EmployeeForm} />
          <Route path="/editemployee/:id" component={EditEmployee} />
          <Route path="/reademployee/:id" component={ReadPage} />
        </Switch>
      </main>
    );
  }
}

export default Main;
