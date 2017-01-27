'use strict';

module.exports = {
    isActiveUser: isActiveUser,
    filterActive: filterActive
};

function isActiveUser(user) {
    if (user.isActive) {
        return true;
    } else {
        return false;
    }
}

function filterActive(userData) {
    var userDataChanged = userData.concat();
    userDataChanged = userDataChanged.filter(isActiveUser);
    return userDataChanged;
}