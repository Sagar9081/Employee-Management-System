import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardContent, Divider, Grid, Typography } from '@material-ui/core';
import { Header, StyleGrid, CardContentText, CardHeading } from "./ReadPage.Style"

const { REACT_APP_API } = process.env;

class ReadEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: {}
        }
    }

    componentDidMount = () => {
        this.getEmployeeById();
    }

    // To get employee based on ID
    getEmployeeById() {
        axios.get(`${REACT_APP_API}/editEmployee/` + this.props.match.params.id)
            .then((response) => {
                this.setState({ result: response.data });

            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        const { result } = this.state
        return (
            <StyleGrid container>
                <Card style={{ height: "60%", width: "50%", marginTop: 50 }}>
                    <Header>Employee Details</Header>
                    <Divider/>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={3}>
                                <CardHeading>First Name :</CardHeading>
                            </Grid>
                            <Grid item xs={6}>
                                <CardContentText>{result.firstName}</CardContentText>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={3}>
                                <CardHeading>Last Name :</CardHeading>
                            </Grid>
                            <Grid item xs={6}>
                                <CardContentText>{result.lastName}</CardContentText>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={3}>
                                <CardHeading>Email :</CardHeading>
                            </Grid>
                            <Grid item xs={6}>
                                <CardContentText>{result.email}</CardContentText>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={3}>
                                <CardHeading>Phone :</CardHeading>
                            </Grid>
                            <Grid item xs={6}>
                                <CardContentText>{result.phone}</CardContentText>
                            </Grid>
                        </Grid>

                    </CardContent>
                </Card>
            </StyleGrid>
        );
    }
}

export default ReadEmployee;
