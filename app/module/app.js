(function() {
    'use strict';

    angular
        .module('app', ['ui.router', 'toastr'])

        .config(function($stateProvider, $urlRouterProvider){
        	$urlRouterProvider.otherwise('/main');

        	$stateProvider
        	.state('main', {
        		url: '/main',
        		templateUrl: '/app/templates/template1.html',
        		controller: 'MainController as main'
        	})
        	.state('secondary', {
        		url: '/secondary',
        		templateUrl: '/app/templates/template2.html',
        		controller: 'SecondaryController as secondary'
        	});

        });

})();