'use strict';

module.exports = {
    allUsers: function (usersDataRows) {
        var allUsersTable = $('.all-users');
        allUsersTable.append(usersDataRows);
    },
    activeUsers: function (usersDataRows) {
        var activeUsersTable = $('.active-users');
        activeUsersTable.append(usersDataRows);
    },
    sortedByAge: function (usersDataRows) {
        var sortedByAgeTable = $('.sort-by-age');
        sortedByNameTable.append(usersDataRows);
    },
    sortedByName: function (usersDataRows) {
        var sortedByNameTable = $('.sort-by-name');
        sortedByNameTable.append(usersDataRows);
    },
    longSurname: function (usersDataRows) {
        var longSurnameTable = $('.long-surname-sort');
        longSurnameTable.append(usersDataRows);
    }
};