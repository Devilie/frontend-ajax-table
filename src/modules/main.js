'use strict';

var people = require('./people.js');
var fillTable = require('./fillTable.js');

people.getAllWithPromise().then(fillTable.allUsers);

people.getAll(fillTable.activeUsers);

people.getAll(fillTable.sortedByAge);

people.getAll(fillTable.sortedByName);

people.getAll(fillTable.longSurname);