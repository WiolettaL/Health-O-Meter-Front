import "./CalculatorBMI.scss";

const CalculatorBMI = () => {
    return (
        <div className="CalculatorBMI">
            <h2>Kalkulator BMI</h2>
            <p>Wprowadź następujące informacje: </p>
            <label forHtml="height">Wzrost:</label>
            <input type="number"
                id="height"
                name="height"></input>
            <label forHtml="weight">Waga:</label>
            <input type="number"
                id="weight"
                name="weight"></input>
                <button>Oblicz</button>
        </div>
    )
}

export default CalculatorBMI;