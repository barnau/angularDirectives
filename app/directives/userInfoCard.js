angular.module('app')
    .directive('myUserInfoCard', function() {
        var directive = {
            templateUrl: "app/directives/userInfoCard.html",
            restrict: "E",
            controller: "userInfoCardCtrl",
            controllerAs: "vm",
            scope: {
                max: '='
            },
            link: linkFunc,
            bindToController: true

        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {
            console.log('LINK: scope.min = %s *** should be undefined', scope.min);
            console.log('LINK: scope.max = %s *** should be undefined', scope.max);
            console.log('LINK: scope.vm.min = %s', scope.vm.min);
            console.log('LINK: scope.vm.max = %s', scope.vm.max);
            console.log('user: ' + scope.user);
            console.log(scope.$parent.main);
            console.log(scope);

        }
    })