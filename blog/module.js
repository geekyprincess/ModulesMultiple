'use strict';

/* Blog Module */

angular.module('Sms.blog', [])
	.config(['$routeProvider', function config( $routeProvider ) {
	  $routeProvider.when('/blog', {
		controller: 'BlogController',
		templateUrl: 'blog/blog.html'
	  });
	}]);
	
	