import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from "../../../Navbar/Navbar";
import OptionBox from "./OptionBox";
import CalculatorBMI from "./CalculatorBMI/CalculatorBMI";
import CalculatorRFM from "./CalculatorRFM/CalculatorRFM";
import CalculatorWHR from "./CalculatorWHR/CalculatorWHR";

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
            display: "block",
            "&:hover": {
                backgroundColor: "#2a756c"
            }
        }
    }));

    const classes = useStyles();
    const [btnOn, setBtnOn] = useState(null);
    const [calcVisib, setCalcVisib] = useState("hidden");
    const [options, setOptions] = useState({ results: true, calc: true, charts: true })

    const returnBtnHandler = () => {
        setOptions({ results: true, calc: true, charts: true })
        setBtnOn(null);
        setCalcVisib("hidden");
    }

    const hideShowResults = () => {
        setOptions({ results: false, calc: false, charts: false })
        setBtnOn(<Button onClick={returnBtnHandler} className={classes.btnFilled} variant="contained">Wróć</Button>)
    }

    const hideShowCalc = () => {
        setOptions({ results: false, calc: false, charts: false })
        setCalcVisib("CalculatorBMI");
        setBtnOn(<Button onClick={returnBtnHandler} className={classes.btnFilled} variant="contained">Wróć</Button>)
    }

    const hideShowCharts = () => {
        setOptions({ results: false, calc: false, charts: false })
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
                    <OptionBox onClick={() => hideShowResults(options)} primaryClassName={options.results ? "OptionBox" : "OptionBox hidden"} alt="Wyniki" src={healthReport} txt="Dodaj swoje wyniki badań" />
                    <OptionBox onClick={() => hideShowCalc(options)} alt="Kalkulatory" primaryClassName={options.calc ? "OptionBox" : "hidden"} src={calculators} txt="Skorzystaj z kalkulatorów dietetycznych" />
                    <OptionBox onClick={() => hideShowCharts(options)} alt="Wykresy" primaryClassName={options.charts ? "OptionBox" : "hidden"} src={chart} txt="Śledź wyniki" />
                </Grid>
                <Grid
                    className="LoggedUserPage-calc"
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <CalculatorBMI classes={calcVisib} />
                    <CalculatorRFM classes={calcVisib} />
                    <CalculatorWHR classes={calcVisib} />
                </Grid>
                <div className="LoggedUserPage-btnWrapper">{btnOn}</div>
            </main>
        </React.Fragment>
    )
}

export default LoggedUserPage;