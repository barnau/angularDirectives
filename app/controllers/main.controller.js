(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', 'DataFactory', '$stateParams'];

    /* @ngInject */
    function MainController($scope, DataFactory, $stateParams) {
        var vm = this;
        vm.title = 'MainController';
        vm.test = 'this is a test from MainController';
        vm.test = "Variable on main controller";
        console.log($scope);






        activate();

        ////////////////

        function activate() {}
    }
})();