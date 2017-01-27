'use strict';

module.exports = function appendTo(table){
    return function(usersDataRows){
        table.append(usersDataRows);
    }
}