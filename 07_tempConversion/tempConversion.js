const convertToCelsius = function(T_Fahrenheit) {
    return Number(((T_Fahrenheit-32)*5/9).toFixed(1));
}
const convertToFahrenheit = function(T_Celsius) {
    return Number(((T_Celsius*9/5)+32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
