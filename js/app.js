define(function(require, exports, module) {
	'use strict';

	var angular = require('angular');
	var angulartics = require('angulartics');
	require('angularticsAdobe');

	var app = angular.module('sample',['angulartics', 'angulartics.adobe.analytics']);

	app.init = function(){
		angular.bootstrap(document, ['sample']);
	};

	return app;
});