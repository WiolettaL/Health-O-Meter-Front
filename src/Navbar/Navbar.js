import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import "./Navbar.scss";

const Navbar = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        button: {
            marginRight: "2.5rem",
        },
        appBar: {
            backgroundColor: "#184d47"
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        hidden:{
            display: "none"
        }
    }));
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    {props.isLoggedIn ? <MenuIcon /> : <MenuIcon className={classes.hidden} />}
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Health-O-Meter
                </Typography>
                <Link className="Link" to={props.linkTo1}>
                    <Button className={classes.button} color="inherit">{props.navMenuBtn1}</Button>
                </Link>
                <Link className="Link" to={props.linkTo2}>
                    <Button className={classes.button} color="inherit">{props.navMenuBtn2}</Button>
                </Link>
            </Toolbar>
        </AppBar>
    )
}


export default Navbar;