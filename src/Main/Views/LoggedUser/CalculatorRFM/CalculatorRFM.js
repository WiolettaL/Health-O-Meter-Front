const CalculatorFRM = ()=> {
    return(
        <div className="CalculatorRFM">
        <h2>Kalkulator RFM</h2>
        <p>Wprowadź następujące informacje: </p>
        <label forHtml="height">Wzrost:</label>
        <input type="number"
            id="height"
            name="height"></input>
        <label forHtml="weight">Waga:</label>
        <input type="number"
            id="weight"
            name="weight"></input>
        <label forHtml="waistCircum">Obwód w pasie:</label>
            <button>Oblicz</button>
    </div>
    )
}