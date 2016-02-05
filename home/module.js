'use strict';

/* Home Module */

angular.module('Sms.home', [])
	.config(['$routeProvider', function config( $routeProvider ) {
	  $routeProvider.when('/home', {
		controller: 'HomeController',
		template: '<p>This is my Home</p>'
	  });
	}]);