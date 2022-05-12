import axios from "axios";
const { REACT_APP_API } = process.env;
class EmployeeService {
  deleteEmployee(id) {
    axios
      .get(`${REACT_APP_API}/deleteEmployee/` + id)
      .then(() => {
        console.log("Employee Deleted !!!");
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default EmployeeService;
