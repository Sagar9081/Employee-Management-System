import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  CardContent,
  Grid,
  TextField,
  Typography,
  Card,
  Divider,
} from "@material-ui/core";
import axios from "axios";
import {
  Header,
  CardHeading,
  StyleGrid,
  StyleButton,
} from "./EmployeeForm.Style";

const { REACT_APP_API } = process.env;

const EmployeeForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Required")
      .max(25, "Must be 25 characters or less"),
    lastName: Yup.string()
      .required("Required")
      .max(25, "Must be 25 characters or less"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phone: Yup.string()
      .required("Required")
      .min(10, "Must be 10 characters or less"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios
        .post(`${REACT_APP_API}/addEmployee`, {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
        })
        .then((response) => {
          console.log(response);
          window.location.href = "http://localhost:3000";
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <StyleGrid container>
        <Card style={{ height: "100%", width: "60%", marginTop: 50 }}>
          <Header>Employee Details Form</Header>
          <Divider />
          <CardContent>
            <StyleGrid container>
              <Grid item xs={2}>
                <CardHeading>First Name</CardHeading>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  inputProps={{ style: { fontSize: 16 } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  fullWidth
                  variant="outlined"
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
                {formik.errors.firstName ? (
                  <div>{formik.errors.firstName}</div>
                ) : null}
              </Grid>
            </StyleGrid>
            <StyleGrid container>
              <Grid item xs={2}>
                <CardHeading>Last Name</CardHeading>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  inputProps={{ style: { fontSize: 16 } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  fullWidth
                  variant="outlined"
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
                {formik.errors.lastName ? (
                  <div>{formik.errors.lastName}</div>
                ) : null}
              </Grid>
            </StyleGrid>
            <StyleGrid container>
              <Grid item xs={2}>
                <CardHeading>Email</CardHeading>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  inputProps={{ style: { fontSize: 16 } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  fullWidth
                  variant="outlined"
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}
              </Grid>
            </StyleGrid>
            <StyleGrid container>
              <Grid item xs={2}>
                <CardHeading>Phone</CardHeading>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  inputProps={{ style: { fontSize: 16 } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  fullWidth
                  variant="outlined"
                  id="phone"
                  name="phone"
                  label="Phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />

                {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
              </Grid>
            </StyleGrid>
            <StyleGrid item xs={12}>
              <StyleButton
                color="primary"
                text="Submit"
                type="submit"
                variant="contained"
              >
                Submit
              </StyleButton>
            </StyleGrid>
          </CardContent>
        </Card>
      </StyleGrid>
    </form>
  );
};

export default EmployeeForm;
