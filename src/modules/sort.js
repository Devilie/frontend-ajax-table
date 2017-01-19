'use strict';

module.exports = {
    sortAge: function(person1, person2){
        return person1.age - person2.age;
    },
    sortName: function(person1, person2){
        var name1 = person1.name.first + person1.name.last;
        var name2 = person2.name.first + person2.name.last;
        if(name1 < name2) {
            return -1;
        }
        else if (name1 > name2) {
            return 1;
        }
        else {
            return 0;
        }
    }
};