'use strict';

/* Blog Module */

angular.module('Sms.list', [])
	.config(['$routeProvider', function config( $routeProvider ) {
	  $routeProvider.when('/list', {
		controller: 'ListController',
		templateUrl: 'list/list.html'
	  });
	}]);