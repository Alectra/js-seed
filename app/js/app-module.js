(function () {
	'use strict';

	var appModule = angular.module('app', ['ui.router']);

	// appModule.value('apiBase', 'http://pluralsightappviewer.azurewebsites.net/api/appviewer/');

	appModule.config(function ($stateProvider, $urlRouterProvider) {
		var states = [
			{
				name: 'home',
				url: '',
				template: '<home></home>'
			},
			{
				name: 'home2',
				url: '/',
				template: '<home></home>'
			},
			 {
			 	name: 'other',
			 	url: '/other',
			 	template: '<other-home></other-home>'
			}
			//,
			// {
			// 	name: 'thing',
			// 	url: '/thing/{thingId}',
			// 	resolve: {
			// 		thingId: function ($stateParams) {
			// 			return $stateParams.thingId;
			// 		}
			// 	},
			// 	template: '<thing thing-id="$resolve.thingId"></thing>'
			// },
			// {
			// 	name: 'thing.modules',
			// 	url: '/modules',
			// 	template: '<thing-modules thing="vm.thing"></thing-modules>'
			// }
		];

		// $urlRouterProvider.when('/thing/:thingId', '/thing/:thingId/modules');
		// $urlRouterProvider.otherwise('/');

		states.forEach(function (state) {
			$stateProvider.state(state);
		});
	});

// temporary put boxes around each components - remove before publish
	appModule.value('componentBorders', true);
    appModule.run(function (componentBorders) {
        if (componentBorders) {
            if (appModule._invokeQueue) {
                appModule._invokeQueue.forEach(function (item) {
                    if (item[1] == 'component') {
                        var componentName = item[2][0];
                        var componentProperties = item[2][1];
                        if (componentProperties.templateUrl) {
                            var templateUrl = componentProperties.templateUrl;
                            delete componentProperties.templateUrl;
                            componentProperties.template = '<div class="component-borders"><b>' + componentName + '</b><div ng-include="\'' + templateUrl + '\'"></div></div>';
                        }
                        else {
                            var template = '<div class="component-borders">' + componentName + '<div>' + componentProperties.template + '</div></div>';
                            componentProperties.template = template;
                        }
                    }
                });
            }
        }
	});

})();