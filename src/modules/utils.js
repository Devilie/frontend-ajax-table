'use strict';
var userDataChanged;

function isActiveUser(userData) {
    userDataChanged = userData.filter(function (user) {
        if (user.isActive) {
            console.log(user.age);
            return true;
        } else {
            return false;
        }
    });
    return userDataChanged;
}

function sortByAge(userData) {
    userDataChanged = userData.sort(function (user1, user2) {
        if (user1.age > user2.age) {
            return true;
        } else {
            return false;
        }
    });
    return userDataChanged;
}

function sortByName(userData) {
    userDataChanged = userData.sort(function (user1, user2) {
        var name1 = user1.name.first + user1.name.last;
        var name2 = user2.name.first + user2.name.last;
        if (name1 < name2) {
            return false;
        } else {
            return true;
        }
    });
    console.log(userDataChanged);
    return userDataChanged;
}

function filterLastNameLongerThanSix(userData) {
    userDataChanged = userData.filter(function (user) {
        var surname = user.name.last;
        if (surname.length >= 6) {
            return true;
        } else {
            return false;
        }
    });
    return userDataChanged;
}

module.exports = {
    isActive: isActiveUser,
    sortAge: sortByAge,
    sortName: sortByName,
    overSixCharSurname: filterLastNameLongerThanSix
};