const removeFromArray = function(array) {
    for (let j = 1; j < arguments.length; j++) {
        let i = array.indexOf(arguments[j]);
        if (i >= 0) {
            array.splice(i,1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
