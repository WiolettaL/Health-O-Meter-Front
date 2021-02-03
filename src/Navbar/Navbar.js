import React, { useState } from "react";

import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LockOpenSharpIcon from '@material-ui/icons/LockOpenSharp';
import AddBoxSharpIcon from '@material-ui/icons/AddBoxSharp';

import "./Navbar.scss";

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: "theme.palette.common.white",
            },
        },
    },
}))(MenuItem);

const Navbar = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1
        },
        button: {
            marginRight: "2.5rem",
            "@media (max-width: 790px)": {
                display: "none"
            },
            color: "#19456b",
            fontSize: "1.3rem",
            fontWeight: "600"
        },
        appBar: {
            backgroundColor: "#fff",
            width: "100vw"
        },
        menuButton: {
            marginRight: theme.spacing(2),
            color: "#19456b"
        },
        title: {
            flexGrow: 1,
            color: "#19456b",
            fontSize: "1.5rem"

        },
        hidden: {
            display: "none"
        },
        btnMobileMenu: {
            backgroundColor: "#fff",
            height: "3rem",
            width: "7rem",
            color: "#19456b",
            fontWidth: "400",
            fontSize: "1.4rem",
            "@media (min-width: 790px)": {
                display: "none"
            },
            "&:hover": {
                backgroundColor: "#CCE7F3"
            },
        },
        menuItem: {
            "&:hover": {
                backgroundColor: "#CCE7F3"
            },
            "&:focus": {
                backgroundColor: "#CCE7F3"
            }
        }
    }));

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar className={classes.appBar} position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
                    {props.isLoggedIn ? <MenuIcon /> : <MenuIcon className={classes.hidden} />}
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    <Link className="Link" to="/">Health-O-Meter</Link>
                </Typography>
                <Link className="Link" to={props.linkTo1}>
                    <Button className={classes.button} color="primary">{props.navMenuBtn1}</Button>
                </Link>
                <Link className="Link" to={props.linkTo2}>
                    <Button className={classes.button} color="primary">{props.navMenuBtn2}</Button>
                </Link>
                <div>
                    <Button
                        aria-controls="customized-menu"
                        aria-haspopup="true"
                        variant="contained"
                        color="primary"
                        onClick={handleClick}
                        className={classes.btnMobileMenu}
                    >
                        Menu
                    </Button>
                    <StyledMenu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <Link className="Link" to={props.linkTo1}>
                            <StyledMenuItem className={classes.menuItem}>
                                <ListItemIcon>
                                    <AddBoxSharpIcon fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary={props.navMenuBtn1}/>
                            </StyledMenuItem>
                        </Link>
                        <Link className="Link" to={props.linkTo2}>
                            <StyledMenuItem className={classes.menuItem}>
                                <ListItemIcon>
                                    <LockOpenSharpIcon fontSize="large" />
                                </ListItemIcon>
                                <ListItemText primary={props.navMenuBtn2} />
                            </StyledMenuItem>
                        </Link>
                    </StyledMenu>
                </div>
            </Toolbar>
        </AppBar>
    )
}


export default Navbar;