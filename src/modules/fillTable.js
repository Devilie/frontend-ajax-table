'use strict';
var $ = require('jquery');
var allUsersTable = $('.all-users');
var activeUsersTable = $('.active-users');
var sortedByAgeTable = $('.sort-by-age');
var sortedByNameTable = $('.sort-by-name');
var longSurnameTable = $('.long-surname-sort');

module.exports = {
    allUsers: function (usersDataRows) {
        allUsersTable.append(tableRows);
    },
    activeUsers: function (usersDataRows) {
        activeUsersTable.append(usersDataRows);
    },
    sortedByAge: function (usersDataRows) {
        sortedByAgeTable.append(usersDataRows);
    },
    sortedByName: function (usersDataRows) {
        sortedByNameTable.append(usersDataRows);
    },
    longSurname: function (usersDataRows) {
        longSurnameTable.append(usersDataRows);
    }
};