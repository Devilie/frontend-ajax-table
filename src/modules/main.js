'use strict';

var people = require('./people.js');
var utils = require('./utils.js');
var tableElements = require('./tableElements.js');
var fillTable = require('./fillTable.js');

people.getAll()
    .then(tableElements)
    .then(fillTable.allUsers);

people.getAll()
    .then(utils.isActive)
    .then(tableElements)
    .then(fillTable.activeUsers);

people.getAll()
    .then(utils.sortAge)
    .then(tableElements)
    .then(fillTable.sortedByAge);

people.getAll()
    .then(utils.sortName)
    .then(tableElements)
    .then(fillTable.sortedByName);

people.getAll()
    .then(utils.overSixCharSurname)
    .then(tableElements)
    .then(fillTable.longSurname);