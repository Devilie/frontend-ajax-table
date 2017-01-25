'use strict';

var $ = require('jquery');

module.exports = {
    getAll: function () {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: 'http://www.mocky.io/v2/55f748b33568195d044b3dc8',
                success: function (response) {
                    resolve(response);
                },
                error: function () {
                    reject();
                }
            });
        });
    }
};