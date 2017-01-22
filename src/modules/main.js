'use strict';

var $ = require('jquery');
var filterUtils = require('./filterUtils.js');
var people = require('./people.js');
var tableElems = require('./TableElements.js');
var fillTable = require('./fillTable.js');
var tableRows;

people.getAll(function (usersData) {
    tableRows = tableElems.tableHeaders;
    tableRows += usersData.map(tableElems.tableRows(user));
    fillTable.allUsers(tableRows);
});

people.getAll(function (usersData) {
    tableRows = tableElems.tableHeaders;
    tableRows += usersData.filter(filterUtils.isActive(user)).map(tableElems.tableRows(user));
    fillTable.activeUsers(tableRows);
});

people.getAll(function (usersData) {
    tableRows = tableElems.tableHeaders;
    tableRows += usersData.filter(filterUtils.sortAge(user)).map(tableElems.tableRows(user));
    fillTable.sortedByAge(tableRows);
});

people.getAll(function (usersData) {
    tableRows = tableElems.tableHeaders;
    tableRows += usersData.filter(filterUtils.sortName(user)).map(tableElems.tableRows(user));
    fillTable.sortedByName(tableRows);
});

people.getAll(function (usersData) {
    tableRows = tableElems.tableHeaders;
    tableRows += usersData.filter(filterUtils.lastnameLength(user)).map(tableElems.tableRows(user));
    fillTable.longSurname(tableRows);
});