'use strict';

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