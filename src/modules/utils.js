'use strict';

module.exports = {
    isActive: isActiveUser,
    sortAge: sortByAge,
    sortName: sortByName,
    overSixCharSurname: filterLastNameLongerThanSix
};

function isActiveUser(person) {
    if (person.isActive) {
        return true;
    } else {
        return false;
    }
};

function sortByAge(person1, person2) {
    if (person1.age > person2.age) {
        return true;
    } else {
        return false;
    }
};

function sortByName(person1, person2) {
    var name1 = person1.name.first + person1.name.last;
    var name2 = person2.name.first + person2.name.last;
    if (name1 < name2) {
        return false;
    } else {
        return true;
    }
};

function filterLastNameLongerThanSix(person) {
    var surname = person.name.last;
    if (surname.length >= 6) {
        return true;
    } else {
        return false;
    }
};