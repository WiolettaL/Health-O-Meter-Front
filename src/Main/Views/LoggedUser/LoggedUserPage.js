import React from "react";

import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";

import "./LoggedUserPage.scss";

const LoggedUserPage = () => {
    return (
        <React.Fragment>
            <Navbar isLoggedIn={true} navMenuBtn1="Moje konto" linkTo1="/myaccount" navMenuBtn2="Wyloguj" linkTo2="/signout" />
            <Footer />
        </React.Fragment>
    )
}

export default LoggedUserPage;