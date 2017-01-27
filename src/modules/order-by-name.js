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
    if (name1 < name2) {
        return -1;
    } else {
        return 1;
    }
}

function descSort(user1, user2) {
    var name1 = user1.name.first + user1.name.last;
    var name2 = user2.name.first + user2.name.last;
    if (name1 < name2) {
        return 1;
    } else {
        return -1;
    }
}