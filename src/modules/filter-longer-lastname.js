'use strict';

module.exports = {
    filterLastNameLongerThanSix: filterLastNameLongerThanSix,
    longerThanSix: longerThanSix
};

function filterLastNameLongerThanSix(user) {
    var surname = user.name.last;
    if (surname.length >= 6) {
        return true;
    } else {
        return false;
    }
}

function longerThanSix(userData) {
    var userDataChanged = userData.concat();
    userDataChanged = userDataChanged.filter(filterLastNameLongerThanSix);
    return userDataChanged;
}