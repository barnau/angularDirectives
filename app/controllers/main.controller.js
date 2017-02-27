(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['DataFactory', '$stateParams'];

    /* @ngInject */
    function MainController(DataFactory, $stateParams) {
        var vm = this;
        vm.title = 'MainController';
        vm.test = 'this is a test from MainController';








        activate();

        ////////////////

        function activate() {}
    }
})();