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
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
            >
                <img className="Header-svg" src={headerSvg} alt="Header"/>
                <HeaderBox text="Zadbaj o swoje zdrowie">
                    <FavoriteTwoToneIcon/>
                </HeaderBox>
                <HeaderBox text="Zapisuj wyniki badań">
                    <NoteAddTwoToneIcon/>
                </HeaderBox>
                <HeaderBox text="i śledź rezultaty na przestrzeni czasu">
                    <TrendingUpTwoToneIcon/>
                </HeaderBox>
            </Grid>
        </header>
    )
}

export default Header;