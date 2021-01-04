import React from "react";
import { Link } from "react-router-dom";

import "./NavBtn.scss";

const NavBtn = (props) => {
    return (
        <Link to={props.href} className="NavBtn-link">{props.txt}</Link>
    )
}

export default NavBtn;