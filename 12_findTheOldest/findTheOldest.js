const findTheOldest = function(people) {
    people.forEach((person) => (person.yearOfDeath === undefined) ? person.yearOfDeath = 2023 : null)
    return people.sort((a,b) => (b.yearOfDeath - b.yearOfBirth)-(a.yearOfDeath - a.yearOfBirth))[0];
};

// Do not edit below this line
module.exports = findTheOldest;
