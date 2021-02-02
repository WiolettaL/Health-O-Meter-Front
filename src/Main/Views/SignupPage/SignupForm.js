import React, { useState } from 'react';
import { Link } from "react-router-dom";

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

import "./SignupForm.scss";

const SignupForm = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                marginLeft: "2rem",
                width: '13rem',
            },
            formControl: {
                marginLeft: "2rem",
                minWidth: 120,
            },
            selectEmpty: {
                marginTop: "1rem",
            }
        },
        btnOutlined: {
            color: "#21665e",
            "&:hover": {
                backgroundColor: "#f9fcf7"
            },
            margin: ".8rem"
        },
        btnFilled: {
            color: "#ffe3de",
            backgroundColor: "#11698e",
            margin: ".8rem",
            "&:hover": {
                backgroundColor: "#51adcf"
            }
        }
    }));
    const classes = useStyles();
    const [gender, setGender] = useState('');

    const handleChange = (event) => {
        setGender(event.target.value);
    };
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <h1 className="Signup-heading">Utwórz konto</h1>
            <div className="row">
                <TextField required id="outlined-required" label="Imię" defaultValue="" variant="outlined" />
                <TextField required id="outlined-required" label="Nazwisko" defaultValue="" variant="outlined" />
            </div>
            <div className="row">
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Płeć</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={gender}
                        onChange={handleChange}
                        label="Gender"
                    >
                        <MenuItem value="">
                            <em>Wybierz:</em>
                        </MenuItem>
                        <MenuItem value="MALE">Mężczyzna</MenuItem>
                        <MenuItem value="FEMALE">Kobieta</MenuItem>
                    </Select>
                </FormControl>
                <TextField required id="outlined-required" label="Nickname" defaultValue="" variant="outlined" />
            </div>
            <div className="row">
                <TextField
                    required
                    id="outlined-required"
                    label="Adres e-mail"
                    defaultValue=""
                    variant="outlined"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Powtórz adres e-mail"
                    defaultValue=""
                    variant="outlined"
                />
            </div>
            <div className="row">
                <TextField
                    id="outlined-password-input"
                    label="Hasło"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                />
                <TextField
                    id="outlined-password-input"
                    label="Powtórz hasło"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                />
            </div>
            <Link to="/"><Button className={classes.btnFilled} variant="outlined">Utwórz konto</Button></Link>
        </form>
    )
}

export default SignupForm;