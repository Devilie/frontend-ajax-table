'use strict';

var $ = require('jquery');
var utils = require('./utils.js');
var people = require('./people.js');
var tableElems = require('./TableElements.js');
var fillTable = require('./fillTable.js');
var tableRows;
var parsedData;

people.getAll(function (usersData) {
    tableRows = tableElems.tableHeaders;
    tableRows += usersData.map(tableElems.tableRows);
    fillTable.allUsers(tableRows);
});

people.getAll(function (usersData) {
    tableRows = tableElems.tableHeaders;
    tableRows += usersData.filter(utils.isActive).map(tableElems.tableRows);
    fillTable.activeUsers(tableRows);
});

people.getAll(function (usersData) {
    tableRows = tableElems.tableHeaders;
    usersData = usersData.sort(utils.sortAge);
    tableRows += usersData.map(tableElems.tableRows);
    fillTable.sortedByAge(tableRows);
});

people.getAll(function (usersData) {
    tableRows = tableElems.tableHeaders;
    tableRows += usersData.sort(utils.sortName).map(tableElems.tableRows);
    fillTable.sortedByName(tableRows);
});

people.getAll(function (usersData) {
    tableRows = tableElems.tableHeaders;
    tableRows += usersData.filter(utils.lastnameLength).map(tableElems.tableRows);
    fillTable.longSurname(tableRows);
});