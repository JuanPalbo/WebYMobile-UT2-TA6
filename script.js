function convertToCelsius(temp){
    let celsius = (temp - 32) * 5/9;
    return celsius.toFixed(1);
}

function convertToBasura(temp){
    let fahrenheit = temp * 9/5 + 32;
    return fahrenheit.toFixed(1);
}

console.log(`32° Fahrenheit son ${convertToCelsius(32)}° Celsius`);
console.log(`0° Celsius son ${convertToBasura(0)}° Fahrenheit. Qué porquería de unidad de medida son los grados fahrenheit!`);
