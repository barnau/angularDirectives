angular.module('app')
    .directive('myUserInfoCard', function() {
        return {
            templateUrl: "app/directives/userInfoCard.html",
            restrict: "E",
            controller: "userInfoCardCtrl",
            controllerAs: "vm"

        };
    })