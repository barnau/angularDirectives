(function() {
    'use strict';

    angular.module('app')
        .controller('userInfoCardCtrl', ['$scope', userInfoCardCtrl]);

    function userInfoCardCtrl($scope) {

        var vm = this;

        console.log(vm.test);

        vm.min = 3;
        vm.user = {
            name: 'Luke Skywalker',
            address: {
                street: 'PO Box 123',
                city: 'Secret Rebel Base',
                planet: 'Yavin 4'
            },
            friends: [
                'Han',
                'Leia',
                'Chewie'
            ]
        };

        vm.knightMe = function(user) {
            console.log(user);
            user.rank = "knight";
            console.log(vm.user);
        }

    }


}());