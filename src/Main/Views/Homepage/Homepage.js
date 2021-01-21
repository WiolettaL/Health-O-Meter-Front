import React from "react";

import Navbar from "../../../Navbar/Navbar";
import Header from "../../../Header/Header";
//import CalculatorBMI from "./Main/Views/LoggedUser/CalculatorBMI/CalculatorBMI";

const Homepage = () => {
    return (
        <React.Fragment>
            <Navbar navMenuBtn1="Utwórz konto" linkTo1="/signup" navMenuBtn2="Zaloguj się" linkTo2="/signin"/>
            <Header />
        </React.Fragment>
    )
}

export default Homepage;