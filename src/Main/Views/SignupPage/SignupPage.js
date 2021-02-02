import React from "react";
import Grid from '@material-ui/core/Grid';

import Navbar from "../../../Navbar/Navbar";
import SignupForm from "./SignupForm";

import "./SignupPage.scss";

const SignupPage = () => {
    return (
        <React.Fragment>
            <Navbar navMenuBtn1="Strona Główna" linkTo1="/" navMenuBtn2="Zaloguj się" linkTo2="/signin"></Navbar>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <SignupForm />
            </Grid>
        </React.Fragment>
    )
}

export default SignupPage;