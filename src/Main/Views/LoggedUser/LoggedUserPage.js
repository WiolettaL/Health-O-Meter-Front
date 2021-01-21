import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from "../../../Navbar/Navbar";
import ResultsChart from "./ResultsChart/ResultsChart";
import OptionBox from "./OptionBox";

import healthReport from "./healthReport.svg";
import calculators from "./calculators.svg";
import chart from "./chart.svg";
import "./LoggedUserPage.scss";

const LoggedUserPage = () => {
    const useStyles = makeStyles((theme) => ({
        btnFilled: {
            color: "#c9eab2",
            backgroundColor: "#7e9e68",
            marginLeft: "50%",
            transform: "translateX(-50%)",
            display: "inline-flex",
            "&:hover": {
                backgroundColor: "#2a756c"
            }
        }
    }));

    const classes = useStyles();

    const [optionResults, setOptionResults] = useState(true);
    const [optionCalc, setOptionCalc] = useState(true);
    const [optionCharts, setOptionCharts] = useState(true);
    const [btnOn, setBtnOn] = useState(null);

    const returnBtnHandler = () => {
        setOptionResults(true);
        setOptionCalc(true);
        setOptionCharts(true);
        setBtnOn(null);
    }

    const hideShowResults = (optionResults) => {
        setOptionResults(false);
        setOptionCalc(false);
        setOptionCharts(false);
        setBtnOn(<Button onClick={returnBtnHandler} className={classes.btnFilled} variant="contained">Wróć</Button>)
    }

    const hideShowCalc = (optionCalc) => {
        setOptionCalc(false);
        setOptionResults(false);
        setOptionCharts(false)
        setBtnOn(<Button onClick={returnBtnHandler} className={classes.btnFilled} variant="contained">Wróć</Button>)
    }

    const hideShowCharts = (optionCharts) => {
        setOptionCharts(false);
        setOptionResults(false);
        setOptionCalc(false);
        setBtnOn(<Button onClick={returnBtnHandler} className={classes.btnFilled} variant="contained">Wróć</Button>)
    }

    return (
        <React.Fragment>
            <Navbar isLoggedIn={true} navMenuBtn1="Moje konto" linkTo1="/logged" navMenuBtn2="Wyloguj" linkTo2="/signout" />
            <main className="LoggedUserPage">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <OptionBox onClick={() => hideShowResults(optionResults)} primaryClassName={optionResults ? "OptionBox" : "OptionBox hidden"} alt="Wyniki" src={healthReport} txt="Dodaj swoje wyniki badań" />
                    <OptionBox onClick={() => hideShowCalc(optionCalc)} alt="Kalkulatory" primaryClassName={optionCalc ? "OptionBox" : "hidden"} src={calculators} txt="Skorzystaj z kalkulatorów dietetycznych" />
                    <OptionBox onClick={() => hideShowCharts(optionCharts)} alt="Wykresy" primaryClassName={optionCharts ? "OptionBox" : "hidden"} src={chart} txt="Śledź wyniki" />
                </Grid>

                {btnOn}
            </main>
        </React.Fragment>
    )
}

export default LoggedUserPage;