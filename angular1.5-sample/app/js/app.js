var app = angular.module("app", [

]);

var CounterCtrl = function() {

};
CounterCtrl.prototype = {
    increment: function() {
        this.count++;
    },
    decrement: function() {
        this.count--;
    }
};
angular.module("app").controller('CounterCtrl', CounterCtrl);


angular.module("app").component('counter', {
    bindings: {
        count: '='
    },
    controller: 'CounterCtrl',
    controllerAs: 'Counter',
    template: [
        '<div class="todo">',
        '<input type="text" ng-model="Counter.count">',
        '<button type="button" ng-click="Counter.decrement();">-</button>',
        '<button type="button" ng-click="Counter.increment();">+</button>',
        '</div>'
    ].join('')
});

//angular.module("app").directive('counter', function counter() {
//    return {
//        scope: {},
//        bindToController: {
//            count: '='
//        },
//        controller: function () {
//            function increment() {
//                this.count++;
//            }
//            function decrement() {
//                this.count--;
//            }
//            this.increment = increment;
//            this.decrement = decrement;
//        },
//        controllerAs: 'counter',
//        template: [
//            '<div class="todo">',
//            '<input type="text" ng-model="counter.count">',
//            '<button type="button" ng-click="counter.decrement();">-</button>',
//            '<button type="button" ng-click="counter.increment();">+</button>',
//            '</div>'
//        ].join('')
//    };
//});