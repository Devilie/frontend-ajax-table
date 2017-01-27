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
var tableElements = require('./tableElements.js');
var appendTo = require('./append-to.js');


people.getAll()
    .then(tableElements)
    .then(appendTo(allUsersTable));

people.getAll()
    .then(filterActiveUsers.filterActive)
    .then(tableElements)
    .then(appendTo(activeUsersTable));

people.getAll()
    .then(orderByAge.ascendingOrder)
    .then(tableElements)
    .then(appendTo(sortedByAgeTable));

people.getAll()
    .then(orderByName.ascendingOrder)
    .then(tableElements)
    .then(appendTo(sortedByNameTable));

people.getAll()
    .then(filterLongerLastname.longerThanSix)
    .then(tableElements)
    .then(appendTo(longSurnameTable));