'use strict';

var $ = require('jquery');
var peopleData;

module.exports = {
    getAll: function () {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: 'http://www.mocky.io/v2/55f748b33568195d044b3dc8',
                success: function (response) {
                    resolve(response);
                },
                error: reject(function () {
                    return new Error("AJAX request failed!");
                })

            });
        });
    }
};