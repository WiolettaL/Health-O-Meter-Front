import React from "react";

import HeaderBox from "./HeaderBox";

import headerSvg from "./Header.svg";

import Grid from '@material-ui/core/Grid';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import NoteAddTwoToneIcon from '@material-ui/icons/NoteAddTwoTone';
import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone';

import "./Header.scss";

const Header = () => {
    return (
        <header className="Header">
            <div className="Header-svg-wrapper">
                <h1 className="Header-heading">Health-O-Meter</h1>
                <p className="Header-heading-sub">Twój osobisty miernik zdrowia</p>
            </div>
            <div className="GridHeader-col">
                <HeaderBox text="Zadbaj o swoje zdrowie">
                    <FavoriteTwoToneIcon />
                </HeaderBox>
                <HeaderBox text="Zapisuj wyniki badań">
                    <NoteAddTwoToneIcon />
                </HeaderBox>
                <HeaderBox text="i śledź rezultaty na przestrzeni czasu">
                    <TrendingUpTwoToneIcon />
                </HeaderBox>
            </div>
        </header>
    )
}

export default Header;