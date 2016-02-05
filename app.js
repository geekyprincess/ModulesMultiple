
/* App Module */
		
angular.module('Sms', ['Sms.home', 'Sms.blog', 'Sms.list'])
	.config( function myAppConfig ( $routeProvider ) {
		$routeProvider.otherwise({ redirectTo: '/home' });
	});
	
	