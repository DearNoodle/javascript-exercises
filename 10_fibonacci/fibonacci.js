const fibonacci = function(input) {
    let num = Number(input) - 1;
    if (num < 0) {
        return "OOPS";
    }
    let series = [1];
    for (let i = 0; i < num; i++) {
        if (series[series.length-2] === undefined) {
            addA = 0;
        } else {
            addA = series[series.length-2];
        }
        addB = series[series.length-1];
        series.push(addA+addB);
    }
    return series[series.length-1]
};

// Do not edit below this line
module.exports = fibonacci;
