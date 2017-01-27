'use strict';

module.exports = {
    ascendingOrder: ascOrder,
    descendingOrder: descOrder,
    ascAgeSort: ascSort,
    descAgeSort: descSort
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
    if (user1.age > user2.age) {
        return 1;
    } else {
        return -1;
    }
}

function descSort(user1, user2) {
    if (user1.age > user2.age) {
        return -1;
    } else {
        return 1;
    }
}