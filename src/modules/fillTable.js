'use strict';
var $ = require('jquery');
var utils = require('./utils.js');
var tableElems = require('./TableElements.js');
var tableRows;
var allUsersTable = $('.all-users');
var activeUsersTable = $('.active-users');
var sortedByAgeTable = $('.sort-by-age');
var sortedByNameTable = $('.sort-by-name');
var longSurnameTable = $('.long-surname-sort');

module.exports = {
    allUsers: function (usersData) {
        tableRows = tableElems.tableHeaders;
        tableRows += usersData.map(tableElems.tableRows);
        allUsersTable.append(tableRows);
    },
    activeUsers: function (usersData) {
        tableRows = tableElems.tableHeaders;
        tableRows += usersData.filter(utils.isActive).map(tableElems.tableRows);
        activeUsersTable.append(tableRows);
    },
    sortedByAge: function (usersData) {
        tableRows = tableElems.tableHeaders;
        usersData = usersData.sort(utils.sortAge);
        tableRows += usersData.map(tableElems.tableRows);
        sortedByAgeTable.append(tableRows);
    },
    sortedByName: function (usersData) {
        tableRows = tableElems.tableHeaders;
        tableRows += usersData.sort(utils.sortName).map(tableElems.tableRows);
        sortedByNameTable.append(tableRows);
    },
    longSurname: function (usersData) {
        tableRows = tableElems.tableHeaders;
        tableRows += usersData.filter(utils.longSurname).map(tableElems.tableRows);
        longSurnameTable.append(tableRows);
    }
};