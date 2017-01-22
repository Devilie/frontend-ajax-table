'use strict';

var peopleData;

module.exports = {
    getAll: function (callback) {
        if (peopleData) {
            callback(peopleData);
        } else {
            $.ajax({
                url: 'http://www.mocky.io/v2/55f748b33568195d044b3dc8',
                success: function (usersData) {
                    peopleData = usersData;
                    callback(usersData);
                }
            })
        }
    }
};