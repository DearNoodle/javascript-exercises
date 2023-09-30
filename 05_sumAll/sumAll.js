const sumAll = function(num1,num2) {
    if (num1 >= 0 & num2 >= 0 & Number.isInteger(num1) & Number.isInteger(num2)) {
        let n = Math.abs(num1-num2)+1;
        result = (num1+num2)*n/2;
        return result;
    } else {
        return "ERROR";
    }
}


// Do not edit below this line
module.exports = sumAll;
