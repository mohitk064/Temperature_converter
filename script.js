function convertTemperature() {
    let temp = parseFloat(document.getElementById('tempInput').value);
    let unit = document.getElementById('unitInput').value;
    let result = document.getElementById('result');

    if (isNaN(temp)) {
        result.innerHTML = "Please enter a valid number!";
        return;
    }

    if (unit === "Celsius") {
        // Convert Celsius to Fahrenheit
        let fahrenheit = (temp * 9/5) + 32;
        result.innerHTML = `${temp} °C = ${fahrenheit.toFixed(2)} °F`;
    } else {
        // Convert Fahrenheit to Celsius
        let celsius = (temp - 32) * 5/9;
        result.innerHTML = `${temp} °F = ${celsius.toFixed(2)} °C`;
    }
}
