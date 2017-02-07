require.config({
	paths:{
		'angular': './../node_modules/angular/angular.min',
		'angulartics': './../node_modules/angulartics/src/angulartics',
		'angularticsAdobe':'alerter'
	},
	shim:{
		angular:{
			exports: 'angular'
		},
		angulartics:{
			deps: ['angular'],
			exports: 'angulartics'
		},
		angularticsAdobe:{
			exports: 'angularticsAdobe'
		}

	}
});

require(['js/app.js'], function(app){
	app.init();
});