'use strict';

var $ = require('jquery');
var allUsersTable = $('.all-users');
var activeUsersTable = $('.active-users');
var sortedByAgeTable = $('.sort-by-age');
var sortedByNameTable = $('.sort-by-name');
var longSurnameTable = $('.long-surname-sort');
var people = require('./people.js');
var filterActiveUsers = require('./filter-active-users.js');
var orderByAge = require('./order-by-age.js');
var orderByName = require('./order-by-name.js');
var filterLongerLastname = require('./filter-longer-lastname.js');
var generateTableRows = require('./generate-table-rows.js');
var appendTo = require('./append-to.js');


people.getAll()
    .then(generateTableRows)
    .then(appendTo(allUsersTable));

people.getAll()
    .then(filterActiveUsers.filterActive)
    .then(generateTableRows)
    .then(appendTo(activeUsersTable));

people.getAll()
    .then(orderByAge.ascendingOrder)
    .then(generateTableRows)
    .then(appendTo(sortedByAgeTable));

people.getAll()
    .then(orderByName.ascendingOrder)
    .then(generateTableRows)
    .then(appendTo(sortedByNameTable));

people.getAll()
    .then(filterLongerLastname.longerThanSix)
    .then(generateTableRows)
    .then(appendTo(longSurnameTable));