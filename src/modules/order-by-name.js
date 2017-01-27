'use strict';

module.exports = {
    ascendingOrder: ascOrder,
    descendingOrder: descOrder,
    ascUserNameSort: ascSort,
    descUserNameSort: descSort
};

function ascOrder(userData) {
    var userDataChanged = userData.concat();
    userDataChanged = userDataChanged.sort(ascSort);
    return userDataChanged;
}

function descOrder(userData) {
    var userDataChanged = userData.concat();
    userDataChanged = userDataChanged.sort(descSort);
    return userDataChanged;
}

function ascSort(user1, user2) {
    var name1 = user1.name.first + user1.name.last;
    var name2 = user2.name.first + user2.name.last;
    var res = name1.localeCompare(name2);
    return res;
}

function descSort(user1, user2) {
    var name1 = user1.name.first + user1.name.last;
    var name2 = user2.name.first + user2.name.last;
    var res = name2.localeCompare(name1);
    return res;
}