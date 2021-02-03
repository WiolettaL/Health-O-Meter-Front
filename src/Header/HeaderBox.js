import React from "react";

import "./HeaderBox.scss"

const HeaderBox = (props) =>{
    return(
        <div className="HeaderBox">
        <p className="HeaderBox-txt"><span>{props.children}</span>{props.text}</p>
        </div>
    )
}

export default HeaderBox;