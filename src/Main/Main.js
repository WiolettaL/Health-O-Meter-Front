import React from "react";
import { Route } from 'react-router-dom';

import Homepage from "./Views/Homepage/Homepage";
import LoginPage from "./Views/LoginPage/LoginPage";
import LoggedUserPage from "./Views/LoggedUser/LoggedUserPage";
import SignupPage from "./Views/SignupPage/SignupPage";

const Main = () => {
    return (
        <React.Fragment>
            <Route path="/" exact component={Homepage} />
            <Route path="/signin" component={LoginPage} />
            <Route path="/logged" component={LoggedUserPage}/>
            <Route path="/signup" component={SignupPage}/>
            <Route path="/signout" component={Homepage}/> {/** Temporary route solution */}
        </React.Fragment>
    )
}

export default Main;