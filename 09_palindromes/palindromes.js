const palindromes = function (str) {
    arr = str.split("");
    let arrClean = arr.filter((char) => (char.toLowerCase() !== char.toUpperCase() || char !== " " && !isNaN(char)));
    arrClean = arrClean.map((char) => char.toLowerCase());
    return (arrClean.toString() === [...arrClean].reverse().toString()) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
