import { useState } from "react";

import "./CalculatorBMI.scss";
import getList from "../getList";

const CalculatorBMI = props => {
    const [weight, setWeight] = useState(null);
    const [height, setHeight] = useState(null);
    const [bmiResult, setBmiResult] = useState(null);
    let data;
    let method = "GET";
    let url = `https://healthomater.herokuapp.com/hom/bmi?height=${height}&weight=${weight}`
    //let url = `http://localhost:8080/hom/bmi?height=${height}&weight=${weight}`;
    if (bmiResult == null) {
        return (
            <div className={props.classes}>
                <h2>Kalkulator BMI</h2>
                <p>Wprowadź następujące informacje: </p>
                <label forHtml="height">Wzrost:</label>
                <input onInput={e => setHeight(e.target.value)} type="number"
                    id="height"
                    name="height"></input>
                <label forHtml="weight">Waga:</label>
                <input onInput={e => setWeight(e.target.value)} type="number"
                    id="weight"
                    name="weight"></input>
                <button onClick={() => getList(data, url, method)
                    .then((data) => { setBmiResult(data) })}>Oblicz</button>
            </div>)
    } else {
        return (
            <div className={props.classes}>
                <h2>Kalkulator BMI</h2>
                <p>Twój wskaźnik BMI wynosi {bmiResult}</p>
                <button onClick={()=> {setBmiResult(null)}}>Oblicz jeszcze raz</button>

            </div>
        )
    }
}

export default CalculatorBMI;