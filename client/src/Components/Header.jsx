import React, { Component } from 'react';
import { Divider, Grid, Typography } from "@material-ui/core"
// To use routing functionalities
import { Link } from 'react-router-dom';
import '../index.css';

class Header extends Component {
    render() {
        return (
            <div>
                <Grid container style={{ marginTop: 30, justifyContent: "center" }} >

                    <Grid item xs={7}>
                        <Typography style={{ fontSize: "2rem", fontWeight: 600 }}>
                            Employee Management System
                        </Typography>
                    </Grid>

                    <Grid item xs={1} style={{ marginLeft:"10%" }}>
                        <Typography style={{ fontSize: "1.75rem", fontWeight: 500 }}>
                            <Link to="/">Home</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={2} >
                        <Typography style={{ fontSize: "1.75rem", fontWeight: 500 }}>
                            <Link to="/addemployee">Add New Employee</Link>
                        </Typography>
                    </Grid>


                </Grid>
                <Divider />
            </div>
        );
    }
}

export default Header;
