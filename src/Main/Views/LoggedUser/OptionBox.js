import React, { useState } from "react";

import "./OptionBox.scss";

const OptionBox = props => {

    return (
            <div onClick={props.onClick} className={props.primaryClassName}>
                <img className="OptionBox-img" alt={props.alt} src={props.src}></img>
                <p className="OptionBox-txt">{props.txt}</p>
            </div>
    )
}

export default OptionBox;