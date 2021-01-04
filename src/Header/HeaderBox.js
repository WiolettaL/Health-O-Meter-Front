import React from "react";

import "./HeaderBox.scss"

const HeaderBox = (props) =>{
    return(
        <div className="HeaderBox">
            <span>{props.children}</span>
            <p className="HeaderBox-txt">{props.text}</p>
        </div>
    )
}

export default HeaderBox;