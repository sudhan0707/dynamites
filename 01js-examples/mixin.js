'use strict';

(function(){

function mixin() {
        var prop,
            args = Array.prototype.slice.call(arguments),
            child = args[0],
            parents = args.slice(1);

        parents.forEach(function (parent) {
            for (prop in parent) {
                if (parent.hasOwnProperty(prop)) {
                    child[prop] = parent[prop];
                }
            }
        }); 
    }

})();