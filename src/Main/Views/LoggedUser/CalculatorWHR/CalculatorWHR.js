import { useState } from "react";

import Loader from "../../../../Loader/Loader";
import getList from "../getList";

const CalculatorWHR = props => {

    const [hipsRat, setHipsRat] = useState(null);
    const [waistRat, setWaistRat] = useState(null);
    const [whrResult, setWhrResult] = useState(null);
    const [loaderState, setLoaderState] = useState({btn: null, loader: "hidden"});

    let url = `https://healthomater.herokuapp.com/hom/whr?waistRatio=${waistRat}&hipRatio=${hipsRat}`
  //let url = `http://localhost:8080/hom/whr?waistRatio=${waistRat}&hipRatio=${hipsRat}`
    let data;
    let method = "GET"

    const clickHandle = ()=>{
        setLoaderState({btn: "hidden", loader: "Loader"});
        getList(data, url, method)
        .then((data) => { setWhrResult(data) })
        .then(()=>{
            setLoaderState({btn: null, loader: "hidden"});
        })
    }

    if (whrResult == null) {
        return (
            <div className={props.classes}>
                <h2>Kalkulator WHR</h2>
                <p>Wprowadź następujące informacje: </p>
                <label forHtml="waistCircum">Obwód talii:</label>
                <input onInput={(e) => setWaistRat(e.target.value)} type="number"
                    id="waistRat"
                    name="waistRat"></input>
                <label forHtml="hipsCircum">Obwód bioder:</label>
                <input onInput={(e) => setHipsRat(e.target.value)} type="number"
                    id="waistRat"
                    name="waistRat"></input>
                <Loader class={loaderState.loader} />
                <button className={loaderState.btn} onClick={() => clickHandle()}>Oblicz</button>
            </div>)
    } else {
        return (
            <div className={props.classes}>
                <h2>Kalkulator WHR</h2>
                <p>Twój wskaźnik WHR wynosi {whrResult}</p>
                <button onClick={() => { setWhrResult(null) }}>Oblicz jeszcze raz</button>
            </div>
        )
    }
}

export default CalculatorWHR;