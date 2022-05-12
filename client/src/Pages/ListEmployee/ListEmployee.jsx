import React, { Component } from "react";
import axios from "axios";
import { Button, Form, FormControl, Modal } from "react-bootstrap";
// To use routing functionalities
import { Link } from "react-router-dom";
import "../../index.css";
import EmployeeService from "../../Services/Services";
import { withStyles } from "@material-ui/core/styles";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";

const { REACT_APP_API } = process.env;

var cellStyle = {
  fontSize: "1.5rem",
};
const styles = (theme) => ({
  caption: {
    color: "green",
    padding: 8,
    fontSize: "1.5rem",
  },
  toolbar: {
    "& > p:nth-of-type(2)": {
      fontSize: "1.5rem",
      color: "red",
      fontWeight: 600,
    },
  },
  menuItem: {
    color: "#0754db",
    fontSize: "1.25rem",
  },
  selectIcon: {
    color: "#0754db",
    fontSize: "1.5rem",
  },
  select: {
    color: "#0754db",
    fontSize: "1.5rem",
  },
});

class ListEmployee extends Component {
  constructor(props) {
    super(props);
    this.employeeService = new EmployeeService();
    this.state = {
      employees: [],
      show: false,
      page: 0,
      rowsPerPage: 10,
    };
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  componentDidMount = () => {
    this.getEmployeeList();
  };

  // To get all the employees
  getEmployeeList() {
    axios
      .get(REACT_APP_API)
      .then((response) => {
        // console.log(response);
        this.setState({
          employees: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // To delete any employee
  deleteEmployee(empid) {
    this.employeeService.deleteEmployee(empid);
    this.getEmployeeList();
    window.location.href = "http://localhost:3000/";
  }

  render() {
    const { employees, show, page, rowsPerPage } = this.state;
    const { classes } = this.props;
    const dataAfterPagination = () => {
      const result = employees.slice(
        page * rowsPerPage,
        (page + 1) * rowsPerPage
      );
      return result;
    };
    return (
      <div style={{ margin: 60 }}>
        <Paper style={{ width: "100%" }}>
          <TableContainer style={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell style={cellStyle}>#</TableCell>
                  <TableCell style={cellStyle}>First Name</TableCell>
                  <TableCell style={cellStyle}>Last Name</TableCell>
                  <TableCell style={cellStyle}>Email</TableCell>
                  <TableCell style={cellStyle}>Phone</TableCell>
                  <TableCell style={cellStyle}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataAfterPagination().map((row, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell style={cellStyle}>{i}</TableCell>
                      <TableCell style={cellStyle}>{row.firstName}</TableCell>
                      <TableCell style={cellStyle}>{row.lastName}</TableCell>
                      <TableCell style={cellStyle}>{row.email}</TableCell>
                      <TableCell style={cellStyle}>{row.phone}</TableCell>
                      <TableCell style={cellStyle}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Link
                            to={"editemployee/" + row._id}
                            className="btn btn-primary"
                          >
                            Edit
                          </Link>
                          <Link
                            to={"reademployee/" + row._id}
                            className="btn btn-info"
                          >
                            View{" "}
                          </Link>
                          <Button onClick={this.handleShow} bsStyle="danger">
                            Delete
                          </Button>
                          {show ? (
                            <Modal
                              show={show}
                              onHide={this.handleClose}
                              backdrop="static"
                              keyboard={false}
                            >
                              <Modal.Header closeButton>
                                <Modal.Title>
                                  Are you sure to delete?
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                Once deleted, record will not found.
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={this.handleClose}
                                >
                                  Close
                                </Button>
                                <Button
                                  variant="primary"
                                  onClick={() => this.deleteEmployee(row._id)}
                                >
                                  Delete
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          ) : (
                            <div></div>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            rowsPerPageOptions={[5, 10, 25]}
            count={this.state.employees.length}
            rowsPerPage={this.state.rowsPerPage}
            page={this.state.page}
            onPageChange={this.handleChangePage}
            onRowsPerPageChange={this.handleChangeRowsPerPage}
            classes={{
              toolbar: classes.toolbar,
              caption: classes.caption,
              menuItem: classes.menuItem,
              select: classes.select,
              selectIcon: classes.selectIcon,
            }}
          />
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(ListEmployee);
