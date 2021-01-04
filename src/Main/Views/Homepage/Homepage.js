import React from "react";

import Navbar from "../../../Navbar/Navbar";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
//import CalculatorBMI from "./Main/Views/LoggedUser/CalculatorBMI/CalculatorBMI";

const Homepage = () => {
    return (
        <React.Fragment>
            <Navbar navMenuBtn="Utwórz konto" navMenuBtn2="Zaloguj się" />
            <Header />
            <Footer />
        </React.Fragment>
    )
}

export default Homepage;