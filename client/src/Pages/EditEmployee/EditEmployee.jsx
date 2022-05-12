import React, { Component } from "react";
import axios from "axios";
import EmployeeEditForm from "./EmployeeEditForm";

const { REACT_APP_API } = process.env;

class EditEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount = () => {
    this.getEmployeeById();
  };

  // To get employee based on ID
  getEmployeeById() {
    axios
      .get(`${REACT_APP_API}/editEmployee/` + this.props.match.params.id)
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // To update the record on submit

  render() {
    if (this.state.data === {}) {
      return false;
    }
    // console.log(this.state.data, this.props.match.params.id);
    return (
      <div>
        {Object.keys(this.state.data).length === 0 ? (
          <></>
        ) : (
          <EmployeeEditForm
            id={this.props.match.params.id}
            initialData={this.state.data}
          />
        )}
      </div>
    );
  }
}

export default EditEmployee;
