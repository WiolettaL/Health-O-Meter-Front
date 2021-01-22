import { useState } from "react";

import getList from "../getList";

const CalculatorRFM = props => {
    const [gender, setGender] = useState(null);
    const [height, setHeight] = useState(null);
    const [waistRat, setWaistRat] = useState(null);
    const [rfmResult, setRfmResult] = useState(null);

    let url = `http://localhost:8080/hom/rfm?gender=${gender}&height=${height}&waistRatio=${waistRat}`
    let data;
    let method = "GET"

    if (rfmResult == null) {
        return (
            <div className={props.classes}>
                <h2>Kalkulator RFM</h2>
                <p>Wprowadź następujące informacje: </p>
                <label forHtml="gender">Płeć:</label>
                <select name="gender" id="genderChoice">
                    <option disabled>Wybierz jedną z opcji:</option>
                    <option onClick={() => setGender("FEMALE")}>Kobieta</option>
                    <option onClick={() => setGender("MALE")}>Mężczyzna</option>
                </select>
                <label forHtml="height">Wzrost:</label>
                <input onInput={(e) => setHeight(e.target.value)} type="number"
                    id="height"
                    name="height"></input>
                <label forHtml="waistCircum">Obwód talii:</label>
                <input onInput={(e) => setWaistRat(e.target.value)} type="number"
                    id="waistRat"
                    name="waistRat"></input>
                <button onClick={() => getList(data, url, method)
                    .then((data) => { setRfmResult(data) })}>Oblicz</button>
            </div>)
    } else {
        return (
            <div className={props.classes}>
                <h2>Kalkulator RFM</h2>
                <p>Twój wskaźnik RFM wynosi {rfmResult}</p>
                <button onClick={() => { setRfmResult(null) }}>Oblicz jeszcze raz</button>
            </div>
        )
    }
}

export default CalculatorRFM;